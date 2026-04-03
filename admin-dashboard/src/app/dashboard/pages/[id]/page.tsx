'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { pageAPI, sectionAPI, mediaAPI, revalidateAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Save, Eye, Upload, Trash2, Plus } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'

interface Section {
  id: string
  type: string
  imageUrl: string | null
  textContent: any
  order: number
}

interface Page {
  id: string
  title: string
  slug: string
  status: string
  website: { id: string; name: string }
  sections: Section[]
}

export default function PageEditorPage({ params }: { params: { id: string } }) {
  const [page, setPage] = useState<Page | null>(null)
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchPage()
  }, [params.id])

  const fetchPage = async () => {
    try {
      const response = await pageAPI.getById(params.id)
      setPage(response.data.data.page)
      setSections(response.data.data.page.sections)
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to fetch page',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSectionUpdate = async (sectionId: string, field: string, value: any) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        if (field === 'textContent') {
          return { ...section, textContent: { ...section.textContent, ...value } }
        }
        return { ...section, [field]: value }
      }
      return section
    })
    setSections(updatedSections)
  }

  const handleImageUpload = async (sectionId: string, file: File) => {
    try {
      const response = await mediaAPI.upload(file)
      const imageUrl = response.data.data.imageUrl
      handleSectionUpdate(sectionId, 'imageUrl', imageUrl)

      toast({
        title: 'Image uploaded',
        description: 'Image has been uploaded successfully',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Upload failed',
        description: error.response?.data?.error || 'Failed to upload image',
      })
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      // Update all sections
      await Promise.all(
        sections.map((section) =>
          sectionAPI.update(section.id, {
            imageUrl: section.imageUrl,
            textContent: section.textContent,
          })
        )
      )

      toast({
        title: 'Changes saved',
        description: 'All sections have been updated successfully',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Save failed',
        description: error.response?.data?.error || 'Failed to save changes',
      })
    } finally {
      setSaving(false)
    }
  }

  const handlePublish = async () => {
    try {
      await handleSave()
      await pageAPI.publish(params.id)
      await revalidateAPI.page(params.id)

      toast({
        title: 'Page published',
        description: 'Page has been published and website updated',
      })

      fetchPage()
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Publish failed',
        description: error.response?.data?.error || 'Failed to publish page',
      })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button className='bg-white border border-gray-200' variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{page.title}</h1>
            <p className="text-sm text-muted-foreground">
              {page.website.name} - /{page.slug}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSave} disabled={saving}>
            <Save className="mr-2 w-4 h-4" />
            {saving ? 'Saving...' : 'Save Draft'}
          </Button>
          <Button onClick={handlePublish} disabled={saving}>
            <Eye className="mr-2 w-4 h-4" />
            Publish
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Section {index + 1} - {section.type}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Image Upload for sections with images (hero, text-image, etc.) */}
                {(section.type === 'hero' || section.type === 'text-image' || section.imageUrl !== null) && (
                  <div>
                    <Label>Section Image</Label>
                    <div className="relative w-full h-48 mt-2 mb-2 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 group hover:border-gray-400 transition-colors">
                      {section.imageUrl ? (
                        <>
                          <Image
                            src={getImageUrl(section.imageUrl)}
                            alt="Section image"
                            fill
                            className="object-cover"
                          />
                          {/* Hover overlay with upload option */}
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                              <Upload className="w-4 h-4" />
                              Change Image
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0]
                                  if (file) handleImageUpload(section.id, file)
                                }}
                              />
                            </label>
                          </div>
                        </>
                      ) : (
                        /* Empty state with upload */
                        <div className="flex items-center justify-center h-full">
                          <label className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors flex flex-col items-center gap-2">
                            <Upload className="w-8 h-8" />
                            <span>Click to upload image</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) handleImageUpload(section.id, file)
                              }}
                            />
                          </label>
                        </div>
                      )}
                    </div>
                    {section.imageUrl && (
                      <div className="flex justify-end mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSectionUpdate(section.id, 'imageUrl', null)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove Image
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Text Content */}                {section.textContent?.title !== undefined && (
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={section.textContent.title || ''}
                      onChange={(e) =>
                        handleSectionUpdate(section.id, 'textContent', {
                          ...section.textContent,
                          title: e.target.value,
                        })
                      }
                      placeholder="Enter title..."
                    />
                  </div>
                )}

                {section.textContent?.subtitle !== undefined && (
                  <div>
                    <Label>Subtitle</Label>
                    <Input
                      value={section.textContent.subtitle || ''}
                      onChange={(e) =>
                        handleSectionUpdate(section.id, 'textContent', {
                          ...section.textContent,
                          subtitle: e.target.value,
                        })
                      }
                      placeholder="Enter subtitle..."
                    />
                  </div>
                )}
                {(section.type === 'hero' || section.type === 'about' || section.type === 'service-details' || section.type === 'text-image' || section.type === 'cta' || section.type === 'stats' || section.type === 'contact-info' || section.textContent?.heading !== undefined) && (
                  <div>
                    <Label>Heading</Label>
                    <Input
                      value={section.textContent?.heading || ''}
                      onChange={(e) =>
                        handleSectionUpdate(section.id, 'textContent', {
                          ...section.textContent,
                          heading: e.target.value,
                        })
                      }
                      placeholder="Enter heading..."
                    />
                  </div>
                )}

                {(section.type === 'hero' || section.type === 'about' || section.type === 'service-details' || section.type === 'text-image' || section.textContent?.subheading !== undefined) && (
                  <div>
                    <Label>Subheading</Label>
                    <Input
                      value={section.textContent?.subheading || ''}
                      onChange={(e) =>
                        handleSectionUpdate(section.id, 'textContent', {
                          ...section.textContent,
                          subheading: e.target.value,
                        })
                      }
                      placeholder="Enter subheading..."
                    />
                  </div>
                )}

                {(section.type === 'hero' || section.type === 'about' || section.type === 'service-details' || section.type === 'text-image' || section.textContent?.description !== undefined) && (
                  <div>
                    <Label>Description</Label>
                    <textarea
                      value={section.textContent?.description || ''}
                      onChange={(e) =>
                        handleSectionUpdate(section.id, 'textContent', {
                          ...section.textContent,
                          description: e.target.value,
                        })
                      }
                      placeholder="Enter description..."
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                )}

                {/* Contact Info Fields */}
                {section.type === 'contact-info' && (
                  <>
                    <div>
                      <Label>Address</Label>
                      <Input
                        value={section.textContent?.address || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            address: e.target.value,
                          })
                        }
                        placeholder="Enter address..."
                      />
                    </div>

                    <div>
                      <Label>Phone</Label>
                      <Input
                        value={section.textContent?.phone || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            phone: e.target.value,
                          })
                        }
                        placeholder="Enter phone number..."
                      />
                    </div>

                    <div>
                      <Label>Email</Label>
                      <Input
                        value={section.textContent?.email || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            email: e.target.value,
                          })
                        }
                        placeholder="Enter email address..."
                      />
                    </div>

                    <div>
                      <Label>Business Hours</Label>
                      <Input
                        value={section.textContent?.hours || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            hours: e.target.value,
                          })
                        }
                        placeholder="Enter business hours..."
                      />
                    </div>
                  </>
                )}

                {/* Map Section Fields */}
                {section.type === 'map' && (
                  <>
                    <div>
                      <Label>Map Embed Code</Label>
                      <textarea
                        value={section.textContent?.mapEmbed || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            mapEmbed: e.target.value,
                          })
                        }
                        placeholder="Enter Google Maps embed code..."
                        className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>

                    <div>
                      <Label>Location Address</Label>
                      <Input
                        value={section.textContent?.address || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            address: e.target.value,
                          })
                        }
                        placeholder="Enter location address..."
                      />
                    </div>
                  </>
                )}

                {/* CTA Section Fields */}
                {section.type === 'cta' && (
                  <>
                    <div>
                      <Label>Heading</Label>
                      <Input
                        value={section.textContent?.heading || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            heading: e.target.value,
                          })
                        }
                        placeholder="Enter heading..."
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <textarea
                        value={section.textContent?.description || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            description: e.target.value,
                          })
                        }
                        placeholder="Enter description..."
                        className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div>
                      <Label>Button Text</Label>
                      <Input
                        value={section.textContent?.cta || ''}
                        onChange={(e) =>
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            cta: e.target.value,
                          })
                        }
                        placeholder="Enter button text..."
                      />
                    </div>
                  </>
                )}

                {section.textContent?.cta !== undefined && section.type !== 'cta' && (
                  <div>
                    <Label>Call to Action</Label>
                    <Input
                      value={section.textContent.cta || ''}
                      onChange={(e) =>
                        handleSectionUpdate(section.id, 'textContent', {
                          ...section.textContent,
                          cta: e.target.value,
                        })
                      }
                      placeholder="Enter CTA text..."
                    />
                  </div>
                )}

                {/* Features array editing for text-image sections */}
                {(['text-image', 'features'].includes(section.type) || (section.textContent?.features !== undefined && Array.isArray(section.textContent.features))) && (
                  <div>
                    <Label>Features</Label>
                    <div className="space-y-2 mt-2">
                      {(section.textContent?.features || []).map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex gap-2">
                          <Input
                            value={feature}
                            onChange={(e) => {
                              const updatedFeatures = [...section.textContent.features]
                              updatedFeatures[featureIndex] = e.target.value
                              handleSectionUpdate(section.id, 'textContent', {
                                ...section.textContent,
                                features: updatedFeatures,
                              })
                            }}
                            placeholder={`Feature ${featureIndex + 1}...`}
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const updatedFeatures = section.textContent.features.filter((_: any, i: number) => i !== featureIndex)
                              handleSectionUpdate(section.id, 'textContent', {
                                ...section.textContent,
                                features: updatedFeatures,
                              })
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const updatedFeatures = [...section.textContent.features, '']
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            features: updatedFeatures,
                          })
                        }}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Feature
                      </Button>
                    </div>
                  </div>
                )}

                {/* Items array editing for services sections */}
                {(['services', 'team', 'gallery', 'timeline', 'faqs', 'features'].includes(section.type) || (section.textContent?.items !== undefined && Array.isArray(section.textContent.items))) && (
                  <div>
                    <Label>{section.type === 'team' ? 'Team Members' : section.type === 'services' ? 'Service Items' : 'Items'}</Label>
                    <div className="space-y-4 mt-2">
                      {(section.textContent?.items || []).map((item: any, itemIndex: number) => (
                        <Card key={itemIndex} className="p-4">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">Item {itemIndex + 1}</h4>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const updatedItems = section.textContent.items.filter((_: any, i: number) => i !== itemIndex)
                                  handleSectionUpdate(section.id, 'textContent', {
                                    ...section.textContent,
                                    items: updatedItems,
                                  })
                                }}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>

                            {typeof item === 'string' ? (
                              <div>
                                <Label>Item Text</Label>
                                <Input
                                  value={item}
                                  onChange={(e) => {
                                    const updatedItems = [...section.textContent.items]
                                    updatedItems[itemIndex] = e.target.value
                                    handleSectionUpdate(section.id, 'textContent', {
                                      ...section.textContent,
                                      items: updatedItems,
                                    })
                                  }}
                                  placeholder="Text..."
                                />
                              </div>
                            ) : (
                              <>
                                {/* Icon field for services */}
                                {item.icon !== undefined && (
                                  <div>
                                    <Label>Icon (e.g., calculator, briefcase, chart)</Label>
                                    <Input
                                      value={item.icon || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, icon: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Icon name..."
                                    />
                                  </div>
                                )}

                                {item.title !== undefined && (
                                  <div>
                                    <Label>Title</Label>
                                    <Input
                                      value={item.title || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, title: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Service title..."
                                    />
                                  </div>
                                )}
                                {item.description !== undefined && (
                                  <div>
                                    <Label>Description</Label>
                                    <textarea
                                      value={item.description || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, description: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Service description..."
                                      className="w-full min-h-[60px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    />
                                  </div>
                                )}
                                {/* Support for team section items with additional fields */}
                                {item.name !== undefined && (
                                  <div>
                                    <Label>Name</Label>
                                    <Input
                                      value={item.name || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, name: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Team member name..."
                                    />
                                  </div>
                                )}
                                {item.role !== undefined && (
                                  <div>
                                    <Label>Role</Label>
                                    <Input
                                      value={item.role || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, role: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Team member role..."
                                    />
                                  </div>
                                )}
                                {/* Team-specific: designation */}
                                {item.designation !== undefined && (
                                  <div>
                                    <Label>Designation</Label>
                                    <Input
                                      value={item.designation || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, designation: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="e.g., Senior Partner..."
                                    />
                                  </div>
                                )}
                                {/* Team-specific: qualifications */}
                                {item.qualifications !== undefined && (
                                  <div>
                                    <Label>Qualifications</Label>
                                    <Input
                                      value={item.qualifications || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, qualifications: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="e.g., CA, CPA..."
                                    />
                                  </div>
                                )}
                                {/* Team-specific: bio */}
                                {item.bio !== undefined && (
                                  <div>
                                    <Label>Bio</Label>
                                    <textarea
                                      value={item.bio || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, bio: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Short bio..."
                                      className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    />
                                  </div>
                                )}
                                {/* Team-specific: linkedin */}
                                {item.linkedin !== undefined && (
                                  <div>
                                    <Label>LinkedIn URL</Label>
                                    <Input
                                      value={item.linkedin || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, linkedin: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="https://linkedin.com/in/..."
                                    />
                                  </div>
                                )}
                                {/* Image field */}
                                {(item.image !== undefined || ['team', 'team-core-header', 'partners'].includes(section.type)) && (
                                  <div>
                                    <Label>Image</Label>
                                    <div className="relative w-full h-32 mt-2 mb-2 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 group hover:border-gray-400 transition-colors">
                                      {item.image ? (
                                        <>
                                          <Image
                                            src={getImageUrl(item.image)}
                                            alt={item.title || item.name || "Item image"}
                                            fill
                                            className="object-cover"
                                          />
                                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <label className="cursor-pointer bg-white text-black px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-gray-100 transition-colors">
                                              <Upload className="w-3 h-3" />
                                              Change
                                              <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={async (e) => {
                                                  const file = e.target.files?.[0]
                                                  if (file) {
                                                    try {
                                                      const response = await mediaAPI.upload(file)
                                                      const imageUrl = response.data.data.imageUrl
                                                      const updatedItems = [...section.textContent.items]
                                                      updatedItems[itemIndex] = { ...item, image: imageUrl }
                                                      handleSectionUpdate(section.id, 'textContent', {
                                                        ...section.textContent,
                                                        items: updatedItems,
                                                      })
                                                    } catch (error: any) {
                                                      toast({
                                                        variant: 'destructive',
                                                        title: 'Upload failed',
                                                        description: 'Failed to upload image',
                                                      })
                                                    }
                                                  }
                                                }}
                                              />
                                            </label>
                                          </div>
                                        </>
                                      ) : (
                                        <div className="flex items-center justify-center h-full">
                                          <label className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors flex flex-col items-center gap-1">
                                            <Upload className="w-6 h-6" />
                                            <span className="text-xs">Upload Image</span>
                                            <input
                                              type="file"
                                              accept="image/*"
                                              className="hidden"
                                              onChange={async (e) => {
                                                const file = e.target.files?.[0]
                                                if (file) {
                                                  try {
                                                    const response = await mediaAPI.upload(file)
                                                    const imageUrl = response.data.data.imageUrl
                                                    const updatedItems = [...section.textContent.items]
                                                    updatedItems[itemIndex] = { ...item, image: imageUrl }
                                                    handleSectionUpdate(section.id, 'textContent', {
                                                      ...section.textContent,
                                                      items: updatedItems,
                                                    })
                                                  } catch (error: any) {
                                                    toast({
                                                      variant: 'destructive',
                                                      title: 'Upload failed',
                                                      description: 'Failed to upload image',
                                                    })
                                                  }
                                                }
                                              }}
                                            />
                                          </label>
                                        </div>
                                      )}
                                    </div>
                                    {item.image && (
                                      <div className="flex justify-end mt-1">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => {
                                            const updatedItems = [...section.textContent.items]
                                            updatedItems[itemIndex] = { ...item, image: '' }
                                            handleSectionUpdate(section.id, 'textContent', {
                                              ...section.textContent,
                                              items: updatedItems,
                                            })
                                          }}
                                        >
                                          <Trash2 className="w-3 h-3 mr-1" />
                                          Remove
                                        </Button>
                                      </div>
                                    )}
                                    <Input
                                      value={item.image || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, image: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Or paste image URL..."
                                      className="mt-2"
                                    />
                                  </div>
                                )}
                                {/* Gallery-specific: src field */}

                                {/* Image / Src Upload */}
                                {((item.image !== undefined || item.src !== undefined) || ['team', 'team-core-header', 'partners', 'gallery'].includes(section.type)) && (
                                  <div>
                                    <Label>{(item.src !== undefined || section.type === 'gallery') ? 'Gallery Image' : 'Member Photo'}</Label>
                                    {(item.image || item.src) && (
                                      <div className="relative w-32 h-32 mb-2 rounded border border-gray-200 overflow-hidden group">

                                        <Image src={getImageUrl(item.image || item.src)} alt="Item" fill className="object-cover" />

                                      </div>
                                    )}
                                    <Input
                                      type="file"
                                      accept="image/*"
                                      onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                          try {
                                            const res = await mediaAPI.upload(file);
                                            const url = res.data.data.imageUrl;
                                            const updatedItems = [...section.textContent.items];
                                            updatedItems[itemIndex] = { ...item, [(item.src !== undefined || section.type === 'gallery') ? 'src' : 'image']: url };
                                            handleSectionUpdate(section.id, 'textContent', { ...section.textContent, items: updatedItems });
                                          } catch (e) { }
                                        }
                                      }}
                                    />
                                  </div>
                                )}
                                {/* Gallery-specific: category */}
                                {item.category !== undefined && (
                                  <div>
                                    <Label>Category</Label>
                                    <Input
                                      value={item.category || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, category: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="e.g., Office, Team, Events..."
                                    />
                                  </div>
                                )}
                                {/* Gallery-specific: alt text */}
                                {item.alt !== undefined && (
                                  <div>
                                    <Label>Alt Text</Label>
                                    <Input
                                      value={item.alt || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, alt: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Image description..."
                                    />
                                  </div>
                                )}
                                {/* FAQ-specific: q and a */}
                                {item.q !== undefined && (
                                  <div>
                                    <Label>Question</Label>
                                    <Input
                                      value={item.q || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, q: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Question..."
                                    />
                                  </div>
                                )}
                                {item.a !== undefined && (
                                  <div>
                                    <Label>Answer</Label>
                                    <textarea
                                      value={item.a || ''}
                                      onChange={(e) => {
                                        const updatedItems = [...section.textContent.items]
                                        updatedItems[itemIndex] = { ...item, a: e.target.value }
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          items: updatedItems,
                                        })
                                      }}
                                      placeholder="Answer..."
                                      className="w-full min-h-[60px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-2"
                                    />
                                  </div>
                                )}

                                {Object.keys(item).map(k => {
                                  const handled = ['icon', 'title', 'description', 'name', 'role', 'designation', 'image', 'src', 'category', 'alt', 'q', 'a']; if (handled.includes(k)) return null;
                                  const val = item[k];
                                  if (k === 'socialLinks') {
                                    return (
                                      <div key={k} className="mt-2 space-y-2 border-t pt-2">
                                        <Label>Social Links</Label>
                                        {Object.keys(val || {}).map(sk => (
                                          <div key={sk} className="flex gap-2 items-center">
                                            <Label className="w-16 text-xs">{sk}</Label>
                                            <Input value={val[sk] || ''} onChange={e => {
                                              const newItems = [...section.textContent.items];
                                              newItems[itemIndex] = { ...item, socialLinks: { ...val, [sk]: e.target.value } };
                                              handleSectionUpdate(section.id, 'textContent', { ...section.textContent, items: newItems });
                                            }} />
                                          </div>
                                        ))}
                                      </div>
                                    );
                                  }
                                  if (typeof val !== 'string' && typeof val !== 'number' && typeof val !== 'boolean') return null;
                                  const isLongText = typeof val === 'string' && (val.length > 50 || k.toLowerCase().includes('desc') || k.toLowerCase().includes('text') || k.toLowerCase().includes('bio') || k.toLowerCase().includes('qualifications') || k.toLowerCase() === 'a'); return (<div key={k} className="mt-2"><Label className="capitalize">{k.replace(/([A-Z])/g, ' $1').trim()}</Label>{isLongText ? (<textarea value={val || ''} onChange={(e) => { const updatedItems = [...section.textContent.items]; updatedItems[itemIndex] = { ...item, [k]: e.target.value }; handleSectionUpdate(section.id, 'textContent', { ...section.textContent, items: updatedItems }); }} className="w-full min-h-[60px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1" />) : (<Input type={typeof val === 'boolean' ? 'checkbox' : 'text'} checked={typeof val === 'boolean' ? val : undefined} value={typeof val === 'boolean' ? undefined : (val || '')} onChange={(e) => { const updatedItems = [...section.textContent.items]; updatedItems[itemIndex] = { ...item, [k]: typeof val === 'boolean' ? e.target.checked : e.target.value }; handleSectionUpdate(section.id, 'textContent', { ...section.textContent, items: updatedItems }); }} className={typeof val === 'boolean' ? 'mt-1' : 'mt-1 w-full'} />)}</div>)
                                })}
                              </>
                            )}

                          </div>
                        </Card>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Create a new item with the structure based on the section type
                          const newItem = section.type === 'team'
                            ? { name: '', designation: '', qualifications: '', bio: '', image: '', linkedin: '#', isLeadership: false }
                            : section.type === 'gallery'
                              ? { src: '', alt: '', category: 'Office', title: '' }
                              : section.type === 'faqs'
                                ? { q: '', a: '' }
                                : (section.type === 'benefits' || section.type === 'steps')
                                  ? ''
                                  : { icon: '', title: '', description: '' }

                          const updatedItems = [...section.textContent.items, newItem]
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            items: updatedItems,
                          })
                        }}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Item
                      </Button>
                    </div>
                  </div>
                )}


                {/* Benefits Array editing */}
                {(section.type === 'service-details' || section.textContent?.benefits !== undefined) && Array.isArray(section.textContent?.benefits) && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <Label className="text-base font-semibold">Benefits</Label>
                    {(section.textContent.benefits || []).map((benefit: string, bIndex: number) => (
                      <div key={bIndex} className="flex flex-col gap-2 p-4 border rounded-lg relative bg-gray-50">
                        <div className="flex gap-2">
                          <Input
                            value={benefit}
                            onChange={(e) => {
                              const newArr = [...section.textContent.benefits];
                              newArr[bIndex] = e.target.value;
                              handleSectionUpdate(section.id, 'textContent', { benefits: newArr });
                            }}
                          />
                          <Button variant="destructive" size="icon" onClick={() => {
                            handleSectionUpdate(section.id, 'textContent', { benefits: section.textContent.benefits.filter((_: any, i: number) => i !== bIndex) });
                          }}><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" onClick={() => handleSectionUpdate(section.id, 'textContent', { benefits: [...(section.textContent.benefits || []), 'New Benefit'] })}>Add Benefit</Button>
                  </div>
                )}
                {/* Process Array editing */}
                {(section.type === 'service-details' || section.textContent?.process !== undefined) && Array.isArray(section.textContent?.process) && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <Label className="text-base font-semibold">Process Steps</Label>
                    {(section.textContent.process || []).map((proc: string, pIndex: number) => (
                      <div key={pIndex} className="flex gap-2">
                        <Input
                          value={proc}
                          onChange={(e) => {
                            const newArr = [...section.textContent.process];
                            newArr[pIndex] = e.target.value;
                            handleSectionUpdate(section.id, 'textContent', { process: newArr });
                          }}
                        />
                        <Button variant="destructive" size="icon" onClick={() => {
                          handleSectionUpdate(section.id, 'textContent', { process: section.textContent.process.filter((_: any, i: number) => i !== pIndex) });
                        }}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    ))}
                    <Button variant="outline" onClick={() => handleSectionUpdate(section.id, 'textContent', { process: [...(section.textContent.process || []), 'New Process'] })}>Add Process Step</Button>
                  </div>
                )}
                {/* FAQs under Service-Details */}
                {(section.type === 'service-details' || section.textContent?.faqs !== undefined) && Array.isArray(section.textContent?.faqs) && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <Label className="text-base font-semibold">Service FAQs</Label>
                    {(section.textContent.faqs || []).map((faq: any, fIndex: number) => (
                      <div key={fIndex} className="p-4 border rounded-lg bg-gray-50 flex gap-2">
                        <div className="flex-1 space-y-2">
                          <Input placeholder="Question" value={faq.q || ''} onChange={e => {
                            const newArr = [...section.textContent.faqs];
                            newArr[fIndex] = { ...faq, q: e.target.value };
                            handleSectionUpdate(section.id, 'textContent', { faqs: newArr });
                          }} />
                          <Input placeholder="Answer" value={faq.a || ''} onChange={e => {
                            const newArr = [...section.textContent.faqs];
                            newArr[fIndex] = { ...faq, a: e.target.value };
                            handleSectionUpdate(section.id, 'textContent', { faqs: newArr });
                          }} />
                        </div>
                        <Button variant="destructive" size="icon" onClick={() => handleSectionUpdate(section.id, 'textContent', { faqs: section.textContent.faqs.filter((_: any, i: number) => i !== fIndex) })}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    ))}
                    <Button variant="outline" onClick={() => handleSectionUpdate(section.id, 'textContent', { faqs: [...(section.textContent.faqs || []), { q: 'New Question', a: 'New Answer' }] })}>Add FAQ</Button>
                  </div>
                )}

                {/* Stats array editing for stats sections */}
                {(section.type === 'stats' || (section.textContent?.stats !== undefined && Array.isArray(section.textContent.stats))) && (
                  <div>
                    <Label>Statistics</Label>
                    <div className="space-y-3 mt-2">
                      {(section.textContent?.stats || []).map((stat: any, statIndex: number) => (
                        <Card key={statIndex} className="p-3">
                          <div className="flex gap-3 items-center flex-wrap">
                            <div className="flex-1 min-w-[120px]">
                              <Label>Value/End</Label>
                              <Input
                                value={stat.end !== undefined ? stat.end : (stat.value || '')}
                                onChange={(e) => {
                                  const updatedStats = [...section.textContent.stats]
                                  const key = stat.end !== undefined ? 'end' : 'value'
                                  updatedStats[statIndex] = { ...stat, [key]: e.target.value }
                                  handleSectionUpdate(section.id, 'textContent', {
                                    ...section.textContent,
                                    stats: updatedStats,
                                  })
                                }}
                                placeholder="500"
                              />
                            </div>
                            <div className="flex-1 min-w-[80px]">
                              <Label>Suffix</Label>
                              <Input
                                value={stat.suffix || ''}
                                onChange={(e) => {
                                  const updatedStats = [...section.textContent.stats]
                                  updatedStats[statIndex] = { ...stat, suffix: e.target.value }
                                  handleSectionUpdate(section.id, 'textContent', {
                                    ...section.textContent,
                                    stats: updatedStats,
                                  })
                                }}
                                placeholder="+"
                              />
                            </div>
                            <div className="flex-1 min-w-[120px]">
                              <Label>Label</Label>
                              <Input
                                value={stat.label || ''}
                                onChange={(e) => {
                                  const updatedStats = [...section.textContent.stats]
                                  updatedStats[statIndex] = { ...stat, label: e.target.value }
                                  handleSectionUpdate(section.id, 'textContent', {
                                    ...section.textContent,
                                    stats: updatedStats,
                                  })
                                }}
                                placeholder="Clients Served"
                              />
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const updatedStats = section.textContent.stats.filter((_: any, i: number) => i !== statIndex)
                                handleSectionUpdate(section.id, 'textContent', {
                                  ...section.textContent,
                                  stats: updatedStats,
                                })
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </Card>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const updatedStats = [...section.textContent.stats, { value: '', suffix: '', label: '' }]
                          handleSectionUpdate(section.id, 'textContent', {
                            ...section.textContent,
                            stats: updatedStats,
                          })
                        }}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Statistic
                      </Button>
                    </div>
                  </div>
                )}

                {/* Dynamically render any unhandled textContent fields */}
                {Object.keys(section.textContent || {}).map((key) => {
                  const val = section.textContent[key];
                  // List of keys already handled explicitly
                  const handledKeys = ['title', 'subtitle', 'heading', 'subheading', 'description', 'cta', 'address', 'phone', 'email', 'hours', 'mapEmbed', 'features', 'items', 'stats', 'benefits', 'process', 'faqs'];
                  if (handledKeys.includes(key)) return null;

                  if (typeof val === 'string' || typeof val === 'number') {
                    const isLongText = typeof val === 'string' && (val.length > 80 || key.toLowerCase().includes('desc') || key.toLowerCase().includes('text') || key.toLowerCase().includes('address') || key.toLowerCase().includes('mission') || key.toLowerCase().includes('vision'));
                    const isImage = key.toLowerCase().includes('image') || key.toLowerCase().includes('logo');
                    return (
                      <div key={key}>
                        <Label className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                        {isImage ? (
                          <div className="space-y-2 mt-1">
                            <Input
                              value={val || ''}
                              onChange={(e) =>
                                handleSectionUpdate(section.id, 'textContent', {
                                  ...section.textContent,
                                  [key]: e.target.value,
                                })
                              }
                              placeholder="Image URL"
                            />
                            <div className="flex items-center gap-2">
                              <Input
                                type="file"
                                accept="image/*"
                                className="w-full text-sm"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    try {
                                      const response = await mediaAPI.upload(file);
                                      handleSectionUpdate(section.id, 'textContent', {
                                        ...section.textContent,
                                        [key]: response.data.data.imageUrl,
                                      });
                                    } catch (error) {
                                      console.error(error);
                                    }
                                  }
                                }}
                              />
                            </div>
                            {typeof val === 'string' && val && (
                              <div className="w-32 h-32 relative mt-2 border rounded overflow-hidden">
                                <Image src={getImageUrl(val)} alt={key} fill className="object-cover" />
                              </div>
                            )}
                          </div>
                        ) : isLongText ? (
                          <textarea
                            value={val || ''}
                            onChange={(e) =>
                              handleSectionUpdate(section.id, 'textContent', {
                                ...section.textContent,
                                [key]: e.target.value,
                              })
                            }
                            className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                          />
                        ) : (
                          <Input
                            value={val || ''}
                            onChange={(e) =>
                              handleSectionUpdate(section.id, 'textContent', {
                                ...section.textContent,
                                [key]: typeof val === 'number' ? Number(e.target.value) : e.target.value,
                              })
                            }
                          />
                        )}
                      </div>
                    );
                  }

                  if (Array.isArray(val)) {
                    return (
                      <div key={key}>
                        <Label className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                        <div className="space-y-3 mt-2">
                          {val.map((item: any, itemIndex: number) => (
                            <Card key={itemIndex} className="p-3">
                              {typeof item === 'string' ? (
                                <div className="flex gap-2">
                                  <Input
                                    value={item}
                                    onChange={(e) => {
                                      const updatedArr = [...val];
                                      updatedArr[itemIndex] = e.target.value;
                                      handleSectionUpdate(section.id, 'textContent', {
                                        ...section.textContent,
                                        [key]: updatedArr,
                                      })
                                    }}
                                  />
                                  <Button variant="outline" size="sm" onClick={() => {
                                    const updatedArr = val.filter((_: any, i: number) => i !== itemIndex);
                                    handleSectionUpdate(section.id, 'textContent', {
                                      ...section.textContent,
                                      [key]: updatedArr,
                                    })
                                  }}><Trash2 className="w-4 h-4" /></Button>
                                </div>
                              ) : typeof item === 'object' ? (
                                <div className="space-y-2">
                                  <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-sm">Item {itemIndex + 1}</h4>
                                    <Button variant="outline" size="sm" onClick={() => {
                                      const updatedArr = val.filter((_: any, i: number) => i !== itemIndex);
                                      handleSectionUpdate(section.id, 'textContent', {
                                        ...section.textContent,
                                        [key]: updatedArr,
                                      })
                                    }}><Trash2 className="w-4 h-4" /></Button>
                                  </div>
                                  {Object.keys(item).map((itemKey) => {
                                    const isImage = itemKey.toLowerCase().includes('image') || itemKey.toLowerCase().includes('logo') || itemKey.toLowerCase().includes('avatar');
                                    return (
                                      <div key={itemKey}>
                                        <Label className="capitalize text-xs">{itemKey}</Label>
                                        {isImage ? (
                                          <div className="space-y-2 mt-1">
                                            <Input
                                              value={item[itemKey] || ''}
                                              onChange={(e) => {
                                                const updatedArr = [...val];
                                                updatedArr[itemIndex] = { ...item, [itemKey]: e.target.value };
                                                handleSectionUpdate(section.id, 'textContent', {
                                                  ...section.textContent,
                                                  [key]: updatedArr,
                                                })
                                              }}
                                              placeholder="Image URL"
                                            />
                                            <div className="flex gap-2">
                                              <Input
                                                type="file"
                                                accept="image/*"
                                                className="text-xs"
                                                onChange={async (e) => {
                                                  const file = e.target.files?.[0];
                                                  if (file) {
                                                    try {
                                                      const response = await mediaAPI.upload(file);
                                                      const updatedArr = [...val];
                                                      updatedArr[itemIndex] = { ...item, [itemKey]: response.data.data.imageUrl };
                                                      handleSectionUpdate(section.id, 'textContent', {
                                                        ...section.textContent,
                                                        [key]: updatedArr,
                                                      });
                                                    } catch (error) { console.error(error); }
                                                  }
                                                }}
                                              />
                                            </div>
                                            {item[itemKey] && (
                                              <div className="w-20 h-20 relative mt-1 border rounded overflow-hidden">
                                                <Image src={getImageUrl(item[itemKey])} alt={itemKey} fill className="object-cover" />
                                              </div>
                                            )}
                                          </div>
                                        ) : (
                                          itemKey.toLowerCase().includes('desc') || itemKey.toLowerCase().includes('content') ? (
                                            <textarea
                                              value={item[itemKey] || ''}
                                              onChange={(e) => {
                                                const updatedArr = [...val];
                                                updatedArr[itemIndex] = { ...item, [itemKey]: e.target.value };
                                                handleSectionUpdate(section.id, 'textContent', {
                                                  ...section.textContent,
                                                  [key]: updatedArr,
                                                })
                                              }}
                                              className="w-full min-h-[60px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                                            />
                                          ) : (
                                            <Input
                                              value={item[itemKey] || ''}
                                              onChange={(e) => {
                                                const updatedArr = [...val];
                                                updatedArr[itemIndex] = { ...item, [itemKey]: e.target.value };
                                                handleSectionUpdate(section.id, 'textContent', {
                                                  ...section.textContent,
                                                  [key]: updatedArr,
                                                })
                                              }}
                                            />
                                          )
                                        )}
                                      </div>
                                    )
                                  })}
                                </div>
                              ) : null}
                            </Card>
                          ))}
                          <Button variant="outline" size="sm" onClick={() => {
                            const newItem = val.length > 0 ? (typeof val[0] === 'string' ? '' : Object.keys(val[0]).reduce((acc: any, k) => { acc[k] = ''; return acc; }, {})) : '';
                            const updatedArr = [...val, newItem];
                            handleSectionUpdate(section.id, 'textContent', {
                              ...section.textContent,
                              [key]: updatedArr,
                            })
                          }}><Plus className="w-4 h-4 mr-2" />Add Item</Button>
                        </div>
                      </div>
                    );
                  }

                  if (val && typeof val === 'object' && !Array.isArray(val)) {
                    return (
                      <div key={key} className="space-y-4 border p-4 rounded-md bg-gray-50/50">
                        <Label className="capitalize font-semibold text-base">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                        {Object.keys(val).map((subKey) => {
                          const subVal = val[subKey];
                          const isImage = subKey.toLowerCase().includes('image') || subKey.toLowerCase().includes('logo');

                          if (typeof subVal === 'string' || typeof subVal === 'number') {
                            return (
                              <div key={subKey}>
                                <Label className="capitalize text-sm">{subKey.replace(/([A-Z])/g, ' $1').trim()}</Label>
                                {isImage ? (
                                  <div className="space-y-2 mt-1">
                                    <Input
                                      value={subVal || ''}
                                      onChange={(e) =>
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          [key]: { ...section.textContent[key], [subKey]: e.target.value },
                                        })
                                      }
                                      placeholder="Image URL"
                                    />
                                    <div className="flex items-center gap-2">
                                      <Input
                                        type="file"
                                        accept="image/*"
                                        className="w-full text-sm"
                                        onChange={async (e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            try {
                                              const response = await mediaAPI.upload(file);
                                              handleSectionUpdate(section.id, 'textContent', {
                                                ...section.textContent,
                                                [key]: { ...section.textContent[key], [subKey]: response.data.data.imageUrl },
                                              });
                                            } catch (error) {
                                              console.error(error);
                                            }
                                          }
                                        }}
                                      />
                                    </div>
                                    {typeof subVal === 'string' && subVal && (
                                      <div className="w-32 h-32 relative mt-2 border rounded overflow-hidden">
                                        <Image src={getImageUrl(subVal)} alt={subKey} fill className="object-cover" />
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  subKey.toLowerCase().includes('desc') || subKey.toLowerCase().includes('content') ? (
                                    <textarea
                                      value={subVal || ''}
                                      onChange={(e) =>
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          [key]: { ...section.textContent[key], [subKey]: e.target.value },
                                        })
                                      }
                                      className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    />
                                  ) : (
                                    <Input
                                      value={subVal || ''}
                                      onChange={(e) =>
                                        handleSectionUpdate(section.id, 'textContent', {
                                          ...section.textContent,
                                          [key]: { ...section.textContent[key], [subKey]: typeof subVal === 'number' ? Number(e.target.value) : e.target.value },
                                        })
                                      }
                                    />
                                  )
                                )}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )
                  }
                  return null;
                })}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}



