import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className='py-24'>
      <div className='container flex items-center justify-center'>
        <SignIn />
      </div>
    </section>
  )
}
