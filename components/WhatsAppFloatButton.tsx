import { WHATSAPP_HREF } from "@/lib/contact";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      data-cursor="hover"
      style={{ bottom: "56px", right: "56px" }}
      className="fixed z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform duration-300 ease-luxe hover:scale-110 hover:shadow-xl"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="#fff"
        aria-hidden="true"
      >
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.45-.15-.65.14-.19.29-.74.93-.91 1.12-.17.19-.34.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.14-.14.3-.36.45-.55.15-.19.2-.33.3-.55.1-.22.05-.4-.04-.55-.1-.15-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.64 1.12 2.83.14.19 1.9 2.9 4.66 3.96 2.76 1.06 2.76.7 3.26.66.5-.04 1.62-.66 1.85-1.31.23-.65.23-1.2.16-1.31-.07-.12-.26-.19-.55-.34Z" />
        <path d="M12.02 2C6.5 2 2 6.48 2 11.96c0 1.95.55 3.78 1.51 5.34L2 22l4.86-1.45a10.06 10.06 0 0 0 5.16 1.41h.01c5.52 0 10.02-4.48 10.02-9.96C22.04 6.5 17.54 2 12.02 2Zm0 18.18h-.01c-1.62 0-3.2-.43-4.57-1.25l-.33-.2-3.32.99.99-3.23-.21-.34a8.13 8.13 0 0 1-1.27-4.39c0-4.5 3.7-8.18 8.22-8.18 2.2 0 4.27.86 5.82 2.4a8.06 8.06 0 0 1 2.41 5.78c0 4.5-3.7 8.18-8.23 8.18Z" />
      </svg>
    </a>
  );
}
