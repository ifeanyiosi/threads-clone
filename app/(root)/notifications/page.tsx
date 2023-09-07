import { fetchUser, getNotification } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  //get notifications
  const notification = await getNotification(userInfo._id);

  return (
    <section>
      <h1 className="head-text mb-10">Notifications</h1>

      <section className="mt-10 flex flex-col gap-5">
        {notification.length > 0 ? (
          <>
            {notification.map((notification) => (
              <Link
                key={notification._id}
                href={`/post/${notification.parentId}`}
              >
                <article className="activity-card">
                  <Image
                    src={notification.author.image}
                    alt="Profile Picture"
                    width={20}
                    height={20}
                  />

                  <p className="!text-small-regular text-light-1">
                    <span className="mr-1 text-[#26a7de]">
                      {notification.author.name}
                    </span>
                    replied to your post
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <p className="!text-base-regular text-light-3">No notification yet</p>
        )}
      </section>
    </section>
  );
};

export default Page;
