import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MapPinHouse,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="#contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          Looking for a passionate developer to help you, have a project in
          mind? Feel free to reach out. Always open to discuss new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2l font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x=4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:jorgeloscr@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jorgeloscr@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x=4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone Number</h4>
                  <a
                    href="tel:+17787884910"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (778) 788-4910
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x=4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPinHouse className="h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vancouver, BC, Canada
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justifycenter">
                <a href="https://github.com/Jortega87" target="_blank">
                  <Github />
                </a>
                <a href="https://www.instagram.com/ort4666/" target="_blank">
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/jorge-ortega-675120309/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
