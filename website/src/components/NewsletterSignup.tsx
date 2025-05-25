import React, { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({ className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using Buttondown.email for newsletter signup
      const response = await fetch('https://buttondown.email/api/emails/embed-subscribe/theopenpath', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={`newsletter-signup ${className}`}>
      <div style={{
        backgroundColor: '#f0f9ff',
        border: '2px solid #0ea5e9',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '500px',
        margin: '2rem auto'
      }}>
        <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>
          📧 Join The Open Path Community
        </h3>
        <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>
          Get monthly updates, practice guides, and stories from our global community working toward flourishing.
        </p>

        {status === 'success' ? (
          <div style={{
            backgroundColor: '#dcfce7',
            border: '1px solid #16a34a',
            borderRadius: '8px',
            padding: '1rem',
            color: '#15803d'
          }}>
            🎉 Thank you! Check your email to confirm your subscription.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={status === 'loading'}
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                backgroundColor: status === 'loading' ? '#9ca3af' : '#1e3a8a',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #ef4444',
            borderRadius: '8px',
            padding: '1rem',
            color: '#dc2626',
            marginTop: '1rem'
          }}>
            Something went wrong. Please try again or email us directly.
          </div>
        )}

        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
