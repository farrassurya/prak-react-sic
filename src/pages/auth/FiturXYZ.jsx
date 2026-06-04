import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import products from "../products.json";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BiBadgeCheck } from "react-icons/bi";


export default function FiturXYZ() {
  return (
    <div className="w-full pl-0 pr-6 pb-10 antialiased">
      <PageHeader title="Fitur XYZ" breadcrumb={["Management", "Fitur XYZ"]} />
      Fitur XYZ adalah fitur baru yang sedang dalam tahap pengembangan. Fitur
      ini akan memberikan kemampuan tambahan untuk mengelola produk dengan lebih
      efisien. Berikut adalah contoh Button Shad UI :
      <Button
        className="mt-4"
        onClick={() => alert("Fitur XYZ berhasil dijalankan!")}
      >
        Run XYZ
      </Button>
      <Button
        variant="outline"
        className="mt-4"
        onClick={() => alert("Fitur XYZ berhasil dijalankan!")}
      >
        Run XYZ
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Badge variant="secondary">
        <BiBadgeCheck data-icon="inline-start" />
        Verified
      </Badge>
    </div>
  );
}
