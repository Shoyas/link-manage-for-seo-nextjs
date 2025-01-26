import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { toKebabCase } from "../utils/stringUtils";

interface CardProps {
    university: string
    subject: string
    title: string
    description: string
}

export function CardComponent({ university, subject, title, description }: CardProps) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {university} - {subject}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter>
                <Link href={`/card/${toKebabCase(university)}/${toKebabCase(subject)}`}>
                    <Button>View Card</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

