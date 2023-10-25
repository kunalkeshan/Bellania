'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { useToast } from '../ui/use-toast';
import axios from 'axios';
import { Button } from '../ui/button';
import { RotateCw, Send } from 'lucide-react';

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	service: z.string(),
	message: z.string(),
});

const Contact = () => {
	const [submitting, setSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			service: '',
			message: '',
		},
	});

	const { toast } = useToast();

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setSubmitting(true);
		try {
			const response = await axios.post('/api/contact', { ...values });
			if (response.status === 200) {
				form.reset();
				toast({
					title: 'Success',
					description:
						"Contact details submitted, I'll get back to you soon!",
				});
			}
		} catch (e) {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'Unable to send contact message, try again later',
			});
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<section id='contact' className='bg-white text-primary'>
			<div className='w-full flex flex-col md:flex-col lg:max-w-7xl lg:mx-auto xl:max-w-8xl gap-4 p-4 md:px-16 pb-12 md:pb-16 lg:pb-32'>
				<h1 className='text-2xl md:text-3xl lg:text-4xl font-medium'>
					Contact Us
				</h1>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col md:flex-row gap-4'
					>
						<div className='flex flex-col md:w-1/2 gap-4'>
							<FormField
								control={form.control}
								name='name'
								disabled={submitting}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name *</FormLabel>
										<FormControl>
											<Input
												placeholder='Name'
												className='border-slate-500'
												type='text'
												required
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								disabled={submitting}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email *</FormLabel>
										<FormControl>
											<Input
												placeholder='Email'
												className='border-slate-500'
												type='email'
												required
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex flex-col items-end md:w-1/2 gap-4'>
							<FormField
								control={form.control}
								name='message'
								disabled={submitting}
								render={({ field }) => (
									<FormItem className='grid w-full gap-1.5'>
										<FormLabel>Your Message *</FormLabel>
										<FormControl>
											<Textarea
												placeholder='What is your project about'
												className='h-56 md:max-h-[8rem] md:min-h-[8rem] border-slate-500'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='w-full md:w-fit'>
								{/* <button
                                    className={`${
                                        submitting
                                            ? "shadow-inner"
                                            : "hover:shadow-none hover:translate-y-1 shadow-[4px_4px_#000000]"
                                    } w-full md:w-fit h-full rounded-lg font-medium text-center border border-primary transition-all bg-secondary px-8 py-4 duration-300 -translate-y-1`}
                                    type="submit"
                                    disabled={submitting}
                                >
                                    {submitting ? "Sending..." : "Just Send"}
                                </button> */}
								<Button>
									<RotateCw className='mr-2 h-4 w-4 animate-spin' />
									<Send size={16} className='mr-2' />
									Send
								</Button>
							</div>
						</div>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default Contact;
