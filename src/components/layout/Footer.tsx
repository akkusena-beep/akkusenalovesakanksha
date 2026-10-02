import Link from "next/link";
import { SOCIAL_LINKS, UNOFFICIAL_DISCLAIMER, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-3">
              Akanksha{" "}
              <span className="text-rose text-sm font-normal tracking-widest">
                FAN ARCHIVE
              </span>
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              A tribute built with love by fans who believe in celebrating her
              journey, her milestones, and her story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-rose transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Hub */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Follow Akanksha
            </h4>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-rose transition-colors group"
                  >
                    <SocialIcon name={social.icon} />
                    <span>{social.handle}</span>
                    {social.followers && (
                      <span className="text-xs text-gold ml-auto">
                        {social.followers}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Disclaimer */}
          <p className="text-xs text-muted text-center leading-relaxed mb-4 max-w-2xl mx-auto">
            {UNOFFICIAL_DISCLAIMER}
          </p>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              Made with ❤ by fans &middot; &copy; {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted">
              <Link href="/privacy" className="hover:text-rose transition-colors">
                Privacy Policy
              </Link>
              <Link href="/guidelines" className="hover:text-rose transition-colors">
                Community Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    snapchat: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.27.04-.022.08-.042.124-.058a.624.624 0 0 1 .2-.035c.233 0 .463.099.637.285a.64.64 0 0 1 .162.505c-.02.154-.102.299-.25.41-.195.144-.476.263-.857.363l-.087.026a2.28 2.28 0 0 0-.39.14c-.167.096-.272.236-.296.418-.025.19.04.395.184.603.665 1.065 1.557 1.882 2.652 2.428.237.118.478.212.722.277.3.082.477.283.487.516.012.27-.17.494-.559.662a5.346 5.346 0 0 1-.95.332c-.07.018-.14.038-.21.06-.22.065-.349.191-.393.379-.028.123-.038.252-.063.382a.686.686 0 0 1-.643.546 2.033 2.033 0 0 1-.396-.042 4.688 4.688 0 0 0-.956-.098c-.328 0-.638.035-.936.092-.478.092-.928.385-1.457.726-.663.427-1.413.91-2.505.91h-.055c-1.092 0-1.843-.483-2.506-.91-.528-.341-.978-.634-1.457-.726a5.037 5.037 0 0 0-.935-.092c-.348 0-.68.036-.956.098a2.04 2.04 0 0 1-.397.042.687.687 0 0 1-.643-.545 3.466 3.466 0 0 0-.063-.383c-.044-.188-.173-.314-.393-.379l-.21-.06a5.347 5.347 0 0 1-.95-.332c-.39-.168-.571-.392-.559-.662.01-.233.187-.434.488-.516.244-.065.485-.159.722-.277 1.095-.546 1.987-1.363 2.651-2.428.145-.208.209-.413.184-.603-.024-.182-.129-.322-.296-.418a2.28 2.28 0 0 0-.39-.14l-.087-.026c-.38-.1-.662-.219-.857-.363a.64.64 0 0 1-.25-.41.643.643 0 0 1 .162-.505.664.664 0 0 1 .636-.285c.044 0 .132.013.2.035.044.016.084.036.124.058.263.15.622.254.922.27.198 0 .326-.045.401-.09a9.39 9.39 0 0 1-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793z" />
      </svg>
    ),
  };

  return <>{icons[name] || null}</>;
}
