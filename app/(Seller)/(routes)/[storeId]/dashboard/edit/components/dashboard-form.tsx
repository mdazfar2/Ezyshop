"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Seller } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { AlertModal } from "@/components/modals/alert-modal";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import ImageUpload from "@/components/ui/image-upload";
import LazyMap from "@/components/Maps/LazyMapWithPin";

const formSchema = z.object({
  storeName: z.string().min(1, "Shop name is required."),
  name: z.string().min(1, "Owner name is required."),
  storeAddress: z.string().min(1, "Address is required."),
  storeUPI: z.string().min(1, "UPI is required."),
  storeMobile: z
    .string()
    .min(1, "Mobile number is required.")
    .regex(/^\d{10}$/, "Mobile number must be 10 digits."), // Adjust regex for your specific needs
  email: z.string().email("Invalid email format"),
  storeDescription: z.string().min(1, "Description is required."),
  coverUrl: z.string().url("Invalid URL"),
  storeLocation: z.object({
    storeLat: z.number(),
    storeLng: z.number(),
  }),
});

type DashboardFormValues = z.infer<typeof formSchema>;

interface DashboardFormProps {
  initialData: Seller | null;
}

export const DashboardForm: React.FC<DashboardFormProps> = ({
  initialData,
}) => {
  const params = useParams();
  const router = useRouter();

  // const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState<number>(
    initialData?.storeLat || 28.61
  );
  const [longitude, setLongitude] = useState<number>(
    initialData?.storeLng || 77.23
  );

  console.log(latitude + "::::" + longitude);

  const title = "Edit Data";
  const description = "Edit your store Data";
  const toastMessage = "Data updated.";
  const action = "save changes";

  const form = useForm<DashboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: initialData?.storeName || "",
      name: initialData?.name || "",
      storeAddress: initialData?.storeAddress || "",
      storeUPI: initialData?.storeUPI || "",
      storeMobile: initialData?.storeMobile || "",
      email: initialData?.email || undefined,
      storeDescription: initialData?.storeDescription || "",
      coverUrl: initialData?.coverUrl || "",
      storeLocation: {
        storeLat: initialData?.storeLat || 28.61,
        storeLng: initialData?.storeLng || 77.23,
      },
    },
  });

  // console.log(initialData?.coverUrl)
  const onSubmit = async (data: DashboardFormValues) => {
    // console.log(
    //   data.storeLocation.storeLat + " " + data.storeLocation.storeLng
    // );

    try {
      setLoading(true);

      await axios.patch(`/api/${params.storeId}`, data);

      router.refresh();
      router.push(`/${params.storeId}/dashboard`);
      router.refresh();
      toast.success(toastMessage);
      console.log(data);
    } catch (err) {
      toast.error("somthing went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLatChange = (lat: number) => {
    setLatitude(lat);

    form.setValue("storeLocation.storeLat", lat);
  };

  const handleLngChange = (lng: number) => {
    setLongitude(lng);
    form.setValue("storeLocation.storeLng", lng);
  };

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Ownername"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>storeName</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Storename"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storeAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>storeAddress</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="StoreAddress"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storeUPI"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>storeUPI</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="StoreUPI"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storeMobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>storeMobile</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="StoreMobile"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storeDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>storeDescription</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="StoreDescription"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>

                  <FormControl>
                    <Input disabled={loading} placeholder="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={loading}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange()}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <LazyMap
              latitude={latitude}
              longitude={longitude}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
            /> */}

            <FormField
              control={form.control}
              name="storeLocation"
              render={() => (
                <FormItem>
                  <FormLabel>
                    storeLocation: 
                    <br/>
                    latitude={latitude}
                    <br/>
                    longitude={longitude}
                  </FormLabel>
                  <FormControl>
                    {/* <Input
                      value={latitude}
                      onChange={(latitude) => field.onChange(latitude)}
                      placeholder="Longitude"
                    /> */}
                    <LazyMap
                      latitude={latitude}
                      longitude={longitude}
                      // setLatitude={setLatitude}
                      // setLongitude={setLongitude}
                      setLatitude={(lat) => handleLatChange(lat)}
                      setLongitude={(lng) => handleLngChange(lng)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
      <Separator />
    </>
  );
};
