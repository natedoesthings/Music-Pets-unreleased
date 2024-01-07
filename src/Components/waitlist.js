import '@/styles/waitlist.css'

const WaitlistForm = (func) => {
  return (
    <main>
      <form>
        
        <div class="vstack gap-3 waitlist position-absolute top-50 start-50 translate-middle">
        <h1 className="text-white text-center">Can't Login? Join the Waitlist to get access to MusicPets.io</h1>
        <input name="first-name" type="text" placeholder="First Name" />
        <input name="last-name" type="tex" placeholder="Last Name" />
        <input name="phone" type="number" placeholder="Phone Number" />
        <input name="email" type="email" placeholder="Email Address" />
        <input name="confirm-email" type="email" placeholder="Confirm Email Address" />
        <button onClick={func}>Join the Waitlist!</button>
        </div>
        </form>
    </main>
  )
}

export default WaitlistForm