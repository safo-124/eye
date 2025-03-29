import { Icons } from "@/components/icons";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <Icons.mail className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
        <div>
          <h3 className="text-sm font-semibold">Email</h3>
          <p className="text-sm text-muted-foreground">
            contact@eyesageconsult.com
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Icons.phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
        <div>
          <h3 className="text-sm font-semibold">Phone</h3>
          <p className="text-sm text-muted-foreground">+234 123 456 7890</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Icons.location className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
        <div>
          <h3 className="text-sm font-semibold">Office</h3>
          <p className="text-sm text-muted-foreground">
            123 Construction Avenue, Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}