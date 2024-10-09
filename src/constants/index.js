import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	nextjs,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	expressjs,
	selenium,
	wordpress,
	pumpjack,
	fast,
	weuno,
	pirayo,
	saudi_controls,
	smartdoc,
	cardiology,
	planapp,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Developer",
		icon: web,
	},
	{
		title: "Backend Developer",
		icon: mobile,
	},
	{
		title: "Frontend Developer",
		icon: backend,
	},
	{
		title: "Wordpress Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Express JS",
		icon: expressjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Wordpress",
		icon: wordpress,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "Figma",
		icon: figma,
	},
	{
		name: "Docker",
		icon: docker,
	},
	{
		name: "Nextjs",
		icon: nextjs,
	},
];

const experiences = [

	{
		title: "Frontend Developer",
		company_name: "FAST University | NUCES",
		icon: fast,
		iconBg: "#E6DEDD",
		date: "Aug 2021 - Dec 2021",
		points: [
			"Developing and maintaining University main website using React.js and other related technologies.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
	{
		title: "Web Developer",
		company_name: "FAST University | NUCES",
		icon: fast,
		iconBg: "#E6DEDD",
		date: "Jan 2022 - May 2022",
		points: [
			"Contributed to the development of the website and marketing of the event 'Procom'.",
			"Engaged in synergistic collaboration with fellow developers to craft captivating user experiences.",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "Pumpjack Dataworks | Tixsee Labs",
		icon: pumpjack,
		iconBg: "#E6DEDD",
		date: "June 2022 - Sept 2022",
		points: [
			"Responsibilities encompassed the design and implementation of efficient API endpoints, database management, assurance of data security, and performance optimization to ensure a seamless user experience.",
			"Exploring emerging technologies and methodologies to optimize the development process and ensure the delivery of high - quality, production - ready builds.",
		],
	},
	{
		title: "Backend Developer",
		company_name: "WeUno",
		icon: weuno,
		iconBg: "#E6DEDD",
		date: "Sept 2022 - July 2023",
		points: [
			"Development and upkeep of the server-side components of software applications utilizing Express.js and related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create intricate business logic.",
			"Assumed the role of developing robust and scalable applications through the utilization of frameworks such as Express JS and Adonis JS.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "Pirayo",
		icon: pirayo,
		iconBg: "#E6DEDD",
		date: "July 2023 - March 2024",
		points: [
			"Assumed the role of developing applications through the utilization of frameworks such as Express JS and Fastify JS, contributing to the successful launch of their product.",
			"Exploring emerging technologies and methodologies to optimize the development process and ensure the delivery of high-quality, production-ready builds."
		],
	},
	{
		title: "System Integration Engineer",
		company_name: "Saudi Controls",
		icon: saudi_controls,
		iconBg: "#E6DEDD",
		date: "March 2024 - Present",
		points: [
			"Developed and implemented solutions to integrate various software and hardware components, ensuring seamless communication and functionality across systems.",
			"Collaborated with cross-functional teams to understand system requirements and deliver high-performance integration strategies.",
			"Continuously optimized system performance, proposing improvements to enhance scalability and reliability."
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Smart Doc",
		description:
			"Smart Doc is an all-in-one app for medical professionals and students. With a vast library of medical books, users can easily browse, bookmark, and take notes on their favorite topics. Smart Doc offers a comprehensive database of medical exam questions and answers for those preparing for exams or looking to test their knowledge.",
		tags: [
			{
				name: "nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "mysql",
				color: "green-text-gradient",
			},
			{
				name: "restapi",
				color: "pink-text-gradient",
			},
		],
		image: smartdoc,
		source_code_link: "https://play.google.com/store/apps/details?id=com.getz.smartdoc&pli=1",
	},
	{
		name: "Plan App",
		description:
			"The Plan App is a powerful and feature-rich platform that enables users to take full control of their event planning process. With its intuitive interface and comprehensive set of tools, this app is designed to simplify event creation, updates, and communication, while also providing an integrated calendar for seamless scheduling.",
		tags: [
			{
				name: "expressjs",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "jest",
				color: "pink-text-gradient",
			},
		],
		image: planapp,
		source_code_link: "https://play.google.com/store/apps/details?id=com.weuno.planapp",
	},
	{
		name: "Cardiology Resource Centre",
		description:
			"Welcome to the Cardiology Resource Centre app, an essential tool for doctors in Pakistan seeking to expand their knowledge in the field of cardiology. Our app provides a convenient platform for doctors to request books on various cardiology topics.",
		tags: [
			{
				name: "adonisjs",
				color: "blue-text-gradient",
			},
			{
				name: "mysql",
				color: "green-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "restapi",
				color: "blue-text-gradient",
			},
		],
		image: cardiology,
		source_code_link: "https://play.google.com/store/apps/details?id=com.getz.cardiologyapp",
	},
];

export { services, technologies, experiences, testimonials, projects };
