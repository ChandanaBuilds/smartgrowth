import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.smart-growth.co.in'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/seo`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/social-media-marketing`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/whatsapp-marketing`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/email-marketing`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/web-development`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/creative-design`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services/growth-strategy`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
    ]
}