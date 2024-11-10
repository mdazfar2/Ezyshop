export default [
	{
		id: '1',
		message: 'What is your name?',
		trigger: '2',
	},
	{
		id: '2',
		user: true,
		trigger: '3',
	},
	{
		id: '3',
		message: 'Hi {previousValue}, nice to meet you!',
		trigger: '4',
	},
	{
		id: '4',
		message: 'Select any service to proceed',
		trigger: '5',
	},
	{
		id: '5',
		options: [
			{ value: "Laundry", label: 'Laundry', trigger: '7' },
			{ value: "Cleaning", label: 'Cleaning', trigger: '7' },
			{ value: "AC repair", label: 'AC repair', trigger: '6' },
		],
	},
	{
		id: '6',
		message: 'Sorry! we are not operating {previousValue} right now ',
		trigger: '2',
	},
	{
		id: '7',
		message: 'Awesome! We will be connecting you to our {previousValue} service executive!',
		end: true,
	},
];