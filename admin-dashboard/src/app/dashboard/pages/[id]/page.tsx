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
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{page.title}</h1>
            <p className="text-sm text-muted-foreground">
              {page.website.name} • /{page.slug}
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
                {section.textContent?.heading !== undefined && (
                  <div>
                    <Label>Heading</Label>
                    <Input
                      value={section.textContent.heading || ''}
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

                {section.textContent?.subheading !== undefined && (
                  <div>
                    <Label>Subheading</Label>
                    <Input
                      value={section.textContent.subheading || ''}
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

                {section.textContent?.description !== undefined && (
                  <div>
                    <Label>Description</Label>
                    <textarea
                      value={section.textContent.description || ''}
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
                {section.textContent?.features !== undefined && Array.isArray(section.textContent.features) && (
                  <div>
                    <Label>Features</Label>
                    <div className="space-y-2 mt-2">
                      {section.textContent.features.map((feature: string, featureIndex: number) => (
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
                {section.textContent?.items !== undefined && Array.isArray(section.textContent.items) && (
                  <div>
                    <Label>{section.type === 'team' ? 'Team Members' : section.type === 'services' ? 'Service Items' : 'Items'}</Label>
                    <div className="space-y-4 mt-2">
                      {section.textContent.items.map((item: any, itemIndex: number) => (
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
                            {item.image !== undefined && (
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
                                      {/* Hover overlay with upload option */}
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
                                    /* Empty state with upload */
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
                          </div>
                        </Card>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Create a new item with the structure based on the section type
                          const newItem = section.type === 'team' 
                            ? { name: '', role: '', image: '', description: '' }
                            : section.type === 'gallery'
                            ? { title: '', image: '' }
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

                {/* Stats array editing for stats sections */}
                {section.textContent?.stats !== undefined && Array.isArray(section.textContent.stats) && (
                  <div>
                    <Label>Statistics</Label>
                    <div className="space-y-3 mt-2">
                      {section.textContent.stats.map((stat: any, statIndex: number) => (
                        <Card key={statIndex} className="p-3">
                          <div className="flex gap-3 items-center">
                            <div className="flex-1">
                              <Label>Value</Label>
                              <Input
                                value={stat.value || ''}
                                onChange={(e) => {
                                  const updatedStats = [...section.textContent.stats]
                                  updatedStats[statIndex] = { ...stat, value: e.target.value }
                                  handleSectionUpdate(section.id, 'textContent', {
                                    ...section.textContent,
                                    stats: updatedStats,
                                  })
                                }}
                                placeholder="500+"
                              />
                            </div>
                            <div className="flex-1">
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
                          const updatedStats = [...section.textContent.stats, { value: '', label: '' }]
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
