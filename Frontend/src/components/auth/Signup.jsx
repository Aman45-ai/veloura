import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, User, UtensilsCrossed, Leaf, Users } from 'lucide-react';
import auth from '../../assets/auth.png';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import authApi from '../../services/auth.service'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async(data) => {
    try{
      const response = await authApi.signupApi(data)
      toast.success(response.data.message)
      navigate('/login')
    }catch(error){
            toast.error(error.response?.data?.message || error.response?.data || "Something went wrong!")
        }
  }

  return (
    <div
      className="min-h-dvh w-full flex items-center justify-center lg:justify-end px-4 lg:px-20 py-10 relative bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(5,5,4,0.75) 0%, rgba(5,5,4,0.35) 55%, rgba(5,5,4,0.15) 100%), url(${auth})` }}
    >

      <div className="hidden lg:flex flex-col justify-between absolute left-16 top-16 bottom-16 max-w-xl">
        <div>
          <div className="flex items-center gap-2">
            <Leaf className="text-[#d4a349]" size={28} />
            <span className="text-3xl font-serif text-white">Veloura</span>
          </div>
          <p className="text-xs tracking-[0.3em] text-neutral-300 mt-1 ml-1">
            DINE &middot; DISCOVER &middot; BELONG
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#d4a349]" />
            <span className="text-xs tracking-[0.3em] text-neutral-300">
              A CULINARY JOURNEY AWAITS
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-white">
            Create Your
            <br />
            Veloura <span className="text-[#d4a349] italic">Story</span>
          </h1>
          <p className="text-neutral-300 mt-5 max-w-md">
            Join a community that celebrates great food, curated experiences,
            and unforgetable moments.
          </p>

          <div className="flex gap-10 mt-10">
            {[
              { icon: UtensilsCrossed, label: 'Discover\nExceptional Food' },
              { icon: Leaf, label: 'Curated\nExperiences' },
              { icon: Users, label: 'A Community\nto Belong' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-[#d4a349]/60 flex items-center justify-center">
                  <Icon className="text-[#d4a349]" size={20} />
                </div>
                <span className="text-xs text-neutral-300 text-center whitespace-pre-line">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="relative w-full max-w-md bg-[#0d0c0a]/70 backdrop-blur-xl border border-[#d4a349]/30 rounded-3xl p-10 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-end gap-3 mb-8">
          <span className="text-neutral-300 text-sm">Already have an account?</span>
          <button className="flex items-center gap-1 text-sm text-[#d4a349] border border-[#d4a349]/60 rounded-full px-4 py-1.5 hover:bg-[#d4a349]/10 transition cursor-pointer" onClick={() => {
            navigate('/login')
          }}>
            Log In <ArrowRight size={14} />
          </button>
        </div>

        <h2 className="font-serif text-3xl text-white mb-2">Create an Account</h2>
        <p className="text-neutral-400 text-sm mb-8">
          Join Veloura and start your culinary journey today.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-sm text-neutral-300 mb-1 block">
              Full Name
            </label>
            <div className="flex items-center gap-3 bg-black/30 border border-neutral-700 focus-within:border-[#d4a349] rounded-xl px-4 py-3 transition">
              <User size={18} className="text-neutral-400" />
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="bg-transparent outline-none w-full text-white placeholder:text-neutral-500"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required!"
                  },
                  minLength: {
                    value: 3,
                    message: "Name must be of atleast 3 characters!"
                  }
                })}
              />
            </div>
          </div>
          {errors.name && <p className='text-red-500 font-semibold'>{errors.name.message}</p>}

          <div>
            <label className="text-sm text-neutral-300 mb-1 block">
              Email Address
            </label>
            <div className="flex items-center gap-3 bg-black/30 border border-neutral-700 focus-within:border-[#d4a349] rounded-xl px-4 py-3 transition">
              <Mail size={18} className="text-neutral-400" />
              <input
                type="email"
                name="email"
                placeholder="yourname@example.com"
                className="bg-transparent outline-none w-full text-white placeholder:text-neutral-500"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!"
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address!",
                  }
                })}
              />
            </div>
          </div>

          {errors.email && <p className='text-red-500 font-semibold'>{errors.email.message}</p>}
          <div>
            <label className="text-sm text-neutral-300 mb-1 block">
              Password
            </label>
            <div className="flex items-center gap-3 bg-black/30 border border-neutral-700 focus-within:border-[#d4a349] rounded-xl px-4 py-3 transition">
              <Lock size={18} className="text-neutral-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a password"
                className="bg-transparent outline-none w-full text-white placeholder:text-neutral-500"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!"
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                    message: "Password must be at least 8 characters long and include a number and special character."
                  }
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-neutral-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
           {errors.password && <p className='text-red-500 font-semibold'>{errors.password.message}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-linear-to-r from-[#e8bd6d] to-[#b9812f] text-black font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            Create Account <ArrowRight size={16} />
          </button>
        </form>

      </div>
    </div>
  );
};

export default Signup;