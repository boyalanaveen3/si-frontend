'use server';

import { revalidatePath } from 'next/cache';

const API_BASE = process.env.NEXT_PUBLIC_API_SERVICE ?? 'http://localhost:4000/api';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    throw new Error('All fields are required');
  }

  console.log('Submitting contact form to:', `${API_BASE}/contacts`);
  console.log('Payload:', { name, email, subject, message });

  try {
    const response = await fetch(`${API_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`Failed to submit contact form: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success response:', data);
    revalidatePath('/contact-us');
    return { success: true, data };
  } catch (error) {
    console.error('[Contact Form] Error:', error);
    throw new Error('Failed to submit. Please try again.');
  }
}

export async function submitServiceRequest(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !phone || !message) {
    throw new Error('All fields are required');
  }

  try {
    const response = await fetch(`${API_BASE}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone: parseInt(phone.replace(/\D/g, ''), 10),
        message
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit service request');
    }

    const data = await response.json();
    revalidatePath('/contact-us');
    return { success: true, data };
  } catch (error) {
    console.error('[Service Request] Error:', error);
    throw new Error('Failed to submit. Please try again.');
  }
}

export async function submitCustomerForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phoneRaw = formData.get('phone') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !phoneRaw || !message) {
    throw new Error('All fields are required');
  }

  const phone = parseInt((phoneRaw || '').replace(/\D/g, ''), 10);

  if (Number.isNaN(phone)) {
    throw new Error('Please provide a valid phone number');
  }

  try {
    const response = await fetch(`${API_BASE}/customers/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('[Customer Form] API Error Body:', errorBody);
      throw new Error('Failed to submit enquiry');
    }

    const data = await response.json();
    revalidatePath('/contact-us');
    return { success: true, data };
  } catch (error) {
    console.error('[Customer Form] Error:', error);
    throw new Error('Failed to submit enquiry. Please try again.');
  }
}
