import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    /* TODO: Replace with Resend integration once API key is set up:
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'noreply@i-steelgroup.com',
      to: 'info@i-steelgroup.com',
      subject: `New enquiry from ${data.name} — ${data.projectType}`,
      html: `...`
    })
    */

    // For now, log and return success (wire up email backend before launch)
    console.log('Contact form submission:', {
      ...data,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 })
    }
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
