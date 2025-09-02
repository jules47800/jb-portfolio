"use client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useTranslations} from "next-intl";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormValues>({resolver: zodResolver(schema)});

  async function onSubmit(values: FormValues) {
    setStatus(null);
    const res = await fetch("/api/contact", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(values)});
    if (res.ok) {
      setStatus("ok");
      reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">{t("name")}</label>
        <input 
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" 
          placeholder="Votre nom complet"
          {...register("name")} 
          aria-invalid={!!errors.name} 
        />
        {errors.name && <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {errors.name.message}
        </p>}
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">{t("email")}</label>
        <input 
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" 
          type="email" 
          placeholder="votre.email@exemple.com"
          {...register("email")} 
          aria-invalid={!!errors.email} 
        />
        {errors.email && <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {errors.email.message}
        </p>}
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">{t("message")}</label>
        <textarea 
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none" 
          rows={6} 
          placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
          {...register("message")} 
          aria-invalid={!!errors.message} 
        />
        {errors.message && <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {errors.message.message}
        </p>}
      </div>
      
      <button 
        disabled={isSubmitting} 
        className="w-full inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-white font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200" 
        type="submit"
      >
        {isSubmitting ? (
          <>
            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            {t("submit")}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
      
      {status === "ok" && (
        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-2xl text-green-700 dark:text-green-400">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{t("success")}</span>
        </div>
      )}
      
      {status === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-700 dark:text-red-400">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{t("error")}</span>
        </div>
      )}
    </form>
  );
}


