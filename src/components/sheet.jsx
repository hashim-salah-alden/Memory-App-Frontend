import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet.jsx";

const SHEET_SIDE = "left";

export function SideBar() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key={SHEET_SIDE}>
        <SheetTrigger asChild>
          <div variant="outline">{SHEET_SIDE}</div>
        </SheetTrigger>
        <SheetContent side={SHEET_SIDE}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
