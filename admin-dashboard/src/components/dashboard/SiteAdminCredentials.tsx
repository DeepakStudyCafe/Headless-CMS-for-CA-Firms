'use client'

import { useEffect, useState } from 'react'
import { siteAdminAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { KeyRound, ShieldCheck, Eye, EyeOff, Save, RefreshCw } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface Props {
  websiteId: string
  websiteName: string
}

export function SiteAdminCredentials({ websiteId, websiteName }: Props) {
  const [existing, setExisting] = useState<{ email: string; updatedAt: string } | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchInfo()
  }, [websiteId])

  const fetchInfo = async () => {
    setLoading(true)
    try {
      const res = await siteAdminAPI.getInfo(websiteId)
      const admin = res.data.data.siteAdmin
      setExisting(admin)
      setEmail(admin.email)
    } catch {
      // 404 means not yet configured — that's fine
      setExisting(null)
      setEmail('')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!email.trim()) {
      toast({ variant: 'destructive', title: 'Validation', description: 'Email is required' })
      return
    }
    if (password.length < 8) {
      toast({ variant: 'destructive', title: 'Validation', description: 'Password must be at least 8 characters' })
      return
    }
    if (password !== confirmPassword) {
      toast({ variant: 'destructive', title: 'Validation', description: 'Passwords do not match' })
      return
    }

    setSaving(true)
    try {
      await siteAdminAPI.upsert(websiteId, email.trim(), password)
      toast({ title: 'Saved', description: `Site admin credentials for ${websiteName} saved successfully.` })
      setPassword('')
      setConfirmPassword('')
      await fetchInfo()
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.response?.data?.error || 'Failed to save credentials',
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card className="mt-6 border-dashed border-2 border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 rounded-lg">
            <KeyRound className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <CardTitle className="text-base">Built-in Admin Panel Credentials</CardTitle>
            <CardDescription className="text-xs mt-0.5">
              Set the email &amp; password the site owner uses to log in at{' '}
              <code className="bg-gray-100 px-1 rounded text-xs">/admin</code> on their website.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {loading ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground py-2">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Loading…
          </div>
        ) : (
          <>
            {existing && (
              <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>
                  Currently configured as <strong>{existing.email}</strong>. Enter a new password below to reset it.
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`sa-email-${websiteId}`}>Email</Label>
                <Input
                  id={`sa-email-${websiteId}`}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="owner@example.com"
                />
              </div>

              <div>
                <Label htmlFor={`sa-pass-${websiteId}`}>
                  {existing ? 'New Password' : 'Password'}
                </Label>
                <div className="relative">
                  <Input
                    id={`sa-pass-${websiteId}`}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setShowPassword((p) => !p)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <Label htmlFor={`sa-confirm-${websiteId}`}>Confirm Password</Label>
                <Input
                  id={`sa-confirm-${websiteId}`}
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat password"
                />
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <Button onClick={handleSave} disabled={saving} size="sm">
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Saving…' : existing ? 'Update Credentials' : 'Set Credentials'}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
