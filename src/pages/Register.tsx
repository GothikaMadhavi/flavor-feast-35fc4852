import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroFood from "@/assets/hero-food.jpg";
import { UtensilsCrossed } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", mobile: "", address: "", hno: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter exactly 10 digit mobile number";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.hno.trim()) e.hno = "House number is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("foodUser", JSON.stringify(form));
      navigate("/menu");
    }
  };

  const handleChange = (field: string, value: string) => {
    if (field === "mobile") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroFood} alt="Food background" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/80" />
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-border">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Tasty<span className="text-primary">Bites</span>
            </h1>
          </div>
          <p className="text-center text-muted-foreground mb-6">Create your account to start ordering</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
              { key: "mobile", label: "Mobile Number", type: "tel", placeholder: "9876543210" },
              { key: "email", label: "Email ID", type: "email", placeholder: "john@example.com" },
              { key: "hno", label: "House No.", type: "text", placeholder: "12-A" },
              { key: "address", label: "Address", type: "text", placeholder: "Street, City, State" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <Label htmlFor={key} className="text-sm font-medium text-foreground">{label}</Label>
                <Input
                  id={key}
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="mt-1"
                />
                {errors[key] && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-destructive text-xs mt-1">
                    {errors[key]}
                  </motion.p>
                )}
              </div>
            ))}

            <Button type="submit" className="w-full h-12 text-base font-semibold mt-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              🍽️ Start Ordering
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
