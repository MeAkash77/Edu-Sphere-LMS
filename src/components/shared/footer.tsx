import Link from "next/link";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Facebook, GithubIcon, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
	return (
		<footer className="bg-white pt-16 mt-20">
			<Container>
				<div className="grid grid-cols-2  lg:grid-cols-5 gap-5">
					<div className="col-span-full lg:col-span-2">
						<Image
							src={"/logo.png"}
							width={54}
							height={54}
							alt="logo"
						/>
						<div className="mt-5">
							<p className="flex gap-x-2 text-gray-shade-15">
								<Mail /> iakshu845@gmail.com
							</p>

							<p className="flex gap-x-2 text-gray-shade-15 my-2">
								<Phone /> 0000000000
							</p>
							<p className="flex gap-x-2 text-gray-shade-15">
								<MapPin /> Jamshedpur, Jharkhand, India
							</p>
						</div>
					</div>
					<div className="col-span-full lg:col-span-3">
						<div className="grid grid-cols-2 md:grid-cols-3 gap-5">
							<div>
								<span className="text-gray-shade-15 text-xl font-semibold">
									Home
								</span>
								<ul className="text-gray-shade-35">
									<li>
										<Link href={"/benefits"}>Benefits</Link>
									</li>
									<li>
										<Link href={"/courses"}>
											Our Courses
										</Link>
									</li>
									<li>
										<Link href={"/testimonials"}>
											Testimonials
										</Link>
									</li>
									<li>
										<Link href={"/faq"}>Our FAQ</Link>
									</li>
								</ul>
							</div>
							<div>
								<span className="text-gray-shade-15 text-xl font-semibold">
									About Us
								</span>
								<ul className="text-gray-shade-35">
									<li>
										<Link href={"/about-us"}>Company</Link>
									</li>
									<li>
										<Link href={"/courses"}>
											Achievements
										</Link>
									</li>
									<li>
										<Link href={"/testimonials"}>
											Our Goals
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<span className="text-gray-shade-15 text-xl font-semibold">
									Social Profiles
								</span>
								<ul className="flex gap-x-4 mt-2">
									<li>
										</li>
									<li>
										<Button variant={"outline"}>
											<Link href={"https://github.com/MeAkash77/"}>
												<GithubIcon size={24} />
											</Link>
										</Button>
									</li>
									<li>
										<Button variant={"outline"}>
											<Link href={"https://x.com/iakshu845/"}>
												<Twitter size={24} />
											</Link>
										</Button>
									</li>
									<li>
										<Button variant={"outline"}>
											<Link href={"https://www.linkedin.com/in/me-akash77/"}>
												<Linkedin size={24} />
											</Link>
										</Button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<p className="text-gray-shade-40 text-lg mt-12 pb-5 text-center">
					{" "}
					&copy; {new Date().getFullYear()} EduSphere. (Akash) All rights
					reserved.
				</p>
			</Container>
		</footer>
	);
}
