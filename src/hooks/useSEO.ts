import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
}: SEOProps) => {
  useEffect(() => {
    // Update Document Title
    const finalTitle = `${title} | Helios Digital Technology`;
    document.title = finalTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update OG Title
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", ogTitle || finalTitle);
    } else {
      metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      metaOgTitle.setAttribute("content", ogTitle || finalTitle);
      document.head.appendChild(metaOgTitle);
    }

    // Update OG Description
    let metaOgDesc = document.querySelector('meta[property="og:description"]');
    if (metaOgDesc) {
      metaOgDesc.setAttribute("content", ogDescription || description);
    } else {
      metaOgDesc = document.createElement("meta");
      metaOgDesc.setAttribute("property", "og:description");
      metaOgDesc.setAttribute("content", ogDescription || description);
      document.head.appendChild(metaOgDesc);
    }

    // Update OG URL
    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    const currentUrl = ogUrl || window.location.href;
    if (metaOgUrl) {
      metaOgUrl.setAttribute("content", currentUrl);
    } else {
      metaOgUrl = document.createElement("meta");
      metaOgUrl.setAttribute("property", "og:url");
      metaOgUrl.setAttribute("content", currentUrl);
      document.head.appendChild(metaOgUrl);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl]);
};
