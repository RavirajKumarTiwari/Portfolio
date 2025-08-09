import React from "react";

function Contact() {
    return (
        <div
            name="contact"
            className="w-full py-28 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        >
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight inline bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-600 dark:from-slate-100 dark:via-slate-400 dark:to-cyan-400">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Have a question, idea or opportunity? Drop a message and
                        I'll get back soon.
                    </p>
                </div>
                <form
                    action="https://getform.io/f/pbmqkedb"
                    method="POST"
                    className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md ring-1 ring-slate-200 dark:ring-slate-700 p-8 md:p-12 shadow-xl"
                >
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col">
                            <label
                                className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Your full name"
                                className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-900/50 px-4 py-2.5 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-900/50 px-4 py-2.5 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <label
                                className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                required
                                placeholder="Tell me a bit about your project or say hi"
                                className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-900/50 px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <button className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3 font-medium text-white focus-ring">
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-glow-cyan transition-all group-hover:shadow-lg group-hover:from-cyan-400 group-hover:to-blue-500" />
                            <span className="relative">Send Message</span>
                        </button>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5" />
                </form>
            </div>
        </div>
    );
}

export default Contact;

// getform is used to submit the form data to the backend
// use can see the form data in the getform dashboard
// https://app.getform.io
