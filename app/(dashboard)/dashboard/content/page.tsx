import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LayoutDashboard } from 'lucide-react';
import { getContentItems } from '@/lib/db/queries';
import { CreateContentForm } from '@/components/content/CreateContentForm';
import Link from 'next/link';

function getRelativeTime(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return date.toLocaleDateString();
}

export default async function ContentItemsPage() {
  const contentItems = await getContentItems();

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
        Content Manager
      </h1>
      <Card>
        <CardHeader className="block">
          <CreateContentForm />
        </CardHeader>
        <CardContent>
          {contentItems.length > 0 ? (
            <ul className="space-y-4">
              {contentItems.map((contentItem) => {
                return (
                  <li key={contentItem.id} className="flex items-center space-x-4">
                    <Link href={`/editor/${contentItem.id}`} className="flex items-center space-x-4 w-full">
                      <div className="bg-orange-100 rounded-full p-2">
                        <LayoutDashboard className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {contentItem.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {getRelativeTime(new Date(contentItem.updatedAt))}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No content yet
              </h3>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
