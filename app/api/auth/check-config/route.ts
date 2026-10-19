import { NextResponse } from "next/server";
import transporter from "@/lib/nodemailerConfig";
import prismadb from "@/lib/prismadb";

// This is a diagnostic endpoint to verify SMTP and DB connectivity.
// Access it at: /api/auth/check-config
// IMPORTANT: Remove or protect this endpoint in production after testing!

export async function GET() {
  const results: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    environment: {},
    database: { status: "untested" },
    smtp: { status: "untested" },
  };

  // 1. Check environment variables (mask sensitive values)
  results.environment = {
    DATABASE_URL: process.env.DATABASE_URL
      ? `${process.env.DATABASE_URL.substring(0, 20)}...` 
      : "❌ NOT SET",
    SMTP_HOST: process.env.SMTP_HOST || "❌ NOT SET",
    SMTP_PORT: process.env.SMTP_PORT || "❌ NOT SET",
    SMTP_SECURE: process.env.SMTP_SECURE || "❌ NOT SET",
    SMTP_USER: process.env.SMTP_USER || "❌ NOT SET",
    SMTP_PASS: process.env.SMTP_PASS
      ? `****${process.env.SMTP_PASS.slice(-4)}`
      : "❌ NOT SET",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "✅ SET" : "❌ NOT SET",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "❌ NOT SET",
  };

  // 2. Test database connectivity
  try {
    const userCount = await prismadb.user.count();
    const sellerCount = await prismadb.seller.count();
    results.database = {
      status: "✅ Connected",
      userCount,
      sellerCount,
    };
  } catch (err) {
    results.database = {
      status: "❌ Failed",
      error: err instanceof Error ? err.message : String(err),
    };
  }

  // 3. Test SMTP connectivity (verify without sending)
  try {
    await transporter.verify();
    results.smtp = {
      status: "✅ Connected & Authenticated",
    };
  } catch (err) {
    results.smtp = {
      status: "❌ Failed",
      error: err instanceof Error ? err.message : String(err),
      hint: "For Gmail: ensure 2-Step Verification is ON and use an App Password for SMTP_PASS",
    };
  }

  return NextResponse.json(results, { status: 200 });
}
