import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceCategories } from "@/data/services";

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {serviceCategories.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger className="text-sm font-medium uppercase">
              {category.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                {category.activities.map((activity) => (
                  <li key={activity.title} className="flex">
                    <NavigationMenuLink asChild>
                      <a href={`${category.path}/${activity.title.toLowerCase().replace(/\s+/g, '-')}`}
                         className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">{activity.title}</div>
                        {activity.description && (
                          <p className="text-sm leading-snug text-muted-foreground">
                            {activity.description}
                          </p>
                        )}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a 
              href="/consultation"
              className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Request Consultation
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
