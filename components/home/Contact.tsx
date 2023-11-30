/**
 * Contact Component
 */

'use client';

// Dependencies
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
	fullName: z.string(),
	email: z.string().email(),
	subject: z.string(),
	message: z.string(),
});

const Contact = () => {
	const [submitting, setSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: '',
			email: '',
			subject: '',
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
				<h1 className='text-2xl md:text-3xl lg:text-4xl font-medium w-fit'>
					Contact Us
					<hr className='border-t-4 mt-1 border-t-app-primary rounded w-full' />
				</h1>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className=''>
						<fieldset
							className='flex flex-col md:flex-row gap-4'
							disabled
						>
							<div className='flex flex-col md:w-1/2 gap-4'>
								<FormField
									control={form.control}
									name='fullName'
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
								<FormField
									control={form.control}
									name='subject'
									disabled={submitting}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Subject *</FormLabel>
											<FormControl>
												<Input
													placeholder='Subject'
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
							</div>
							<div className='flex flex-col items-end md:w-1/2 gap-4'>
								<FormField
									control={form.control}
									name='message'
									disabled={submitting}
									render={({ field }) => (
										<FormItem className='grid w-full gap-1.5'>
											<FormLabel>
												Your Message *
											</FormLabel>
											<FormControl>
												<Textarea
													placeholder='What is your project about'
													className='h-56 md:max-h-[12rem] md:min-h-[8rem] border-slate-500'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className='w-full md:w-fit'>
									<Button
										disabled={submitting}
										type='submit'
										className='bg-app-primary hover:bg-app-primary/80 transition-all duration-300'
									>
										{submitting ? (
											<RotateCw
												size={16}
												className='animate-spin mr-2'
											/>
										) : (
											<Send size={16} className='mr-2' />
										)}
										{submitting ? 'Sending...' : 'Send'}
									</Button>
								</div>
							</div>
						</fieldset>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default Contact;
