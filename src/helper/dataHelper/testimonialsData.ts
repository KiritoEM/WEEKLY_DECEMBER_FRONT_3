interface ItestimonialData {
  avatar: string;
  name: string;
  plateform_icon: string;
  plateform_name: string;
}

export default function () {
  const testimonialsData: ItestimonialData[] = [
    { avatar: "/images/testimonials/avatar-1.png", name: "Luna lovegood", plateform_icon: "/images/testimonials/spofity.png", plateform_name: "Spotify" },
    { avatar: "/images/testimonials/avatar-2.png", name: "Emily Blunt", plateform_icon: "/images/testimonials/google-podcast.png", plateform_name: "Google Podcast" },
    { avatar: "/images/testimonials/avatar-3.png", name: "Emily Blunt", plateform_icon: "/images/testimonials/google-podcast.png", plateform_name: "Google Podcast" },
  ];
}
