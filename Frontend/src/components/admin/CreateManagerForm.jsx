
import { useState } from 'react'
import { User, Mail, Lock, Eye, EyeOff, UserPlus, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import adminService from '../../services/admin.service'
import { toast } from 'sonner'

const CreateManagerForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await adminService.adminCreateManagerAccountApi(data)
      toast.success(response.data.message)
      reset()
    } catch (error) {
      console.log('Error response:', error.response?.data)
      toast.error(error.response?.data?.message || 'Failed to create manager account')
    }
  }
  return (
    <div className="bg-[#141210] border border-[#2a2420] rounded-2xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#2a1d0f] flex items-center justify-center shrink-0">
          <UserPlus size={20} className="text-[#d4a349]" />
        </div>

        <div>
          <h3 className="text-lg text-white font-serif">Manager Details</h3>
          <p className="text-sm text-neutral-500">
            Fill in the details below to create a new manager account.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="text-sm text-neutral-300 mb-1 block">
            Full Name
          </label>
          <div className="flex items-center gap-3 bg-black/30 border border-neutral-700 focus-within:border-[#d4a349] rounded-xl px-4 py-3 transition">
            <User size={18} className="text-neutral-400" />

            <input
              type="text"
              placeholder="Enter manager's full name"
              className="bg-transparent outline-none w-full text-white placeholder:text-neutral-500"
              {...register('name', {
                required: 'Full name is required'
              })}
            />
          </div>

          {errors.name && (
            <p className="text-red-400 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm text-neutral-300 mb-1 block">
            Email Address
          </label>

          <div className="flex items-center gap-3 bg-black/30 border border-neutral-700 focus-within:border-[#d4a349] rounded-xl px-4 py-3 transition">
            <Mail size={18} className="text-neutral-400" />

            <input
              type="email"
              placeholder="manager@veloura.com"
              className="bg-transparent outline-none w-full text-white placeholder:text-neutral-500"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address'
                }
              })}
            />
          </div>

          {errors.email && (
            <p className="text-red-400 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm text-neutral-300 mb-1 block">
            Password
          </label>

          <div className="flex items-center gap-3 bg-black/30 border border-neutral-700 focus-within:border-[#d4a349] rounded-xl px-4 py-3 transition">
            <Lock size={18} className="text-neutral-400" />

            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              className="bg-transparent outline-none w-full text-white placeholder:text-neutral-500"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                }
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-neutral-400 hover:text-[#d4a349] transition"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-400 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-linear-to-r from-[#e8bd6d] to-[#b9812f] text-black font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
        >
          <UserPlus size={16} />
          Create Manager Account
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  )
}

export default CreateManagerForm
