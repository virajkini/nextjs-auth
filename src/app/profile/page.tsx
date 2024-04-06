'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { UserAuth } from "../context/AuthContext";
import withAuth from "../wrappers/withAuth/withAuth";

function Profile() {
const { user }: any = UserAuth();
console.log(user)
  return (
    <main className={styles.main}>
      <h1>Profile Page</h1>
      {user ? (
        <div className={styles.profileContainer}>
          <h3 style={{textAlign: 'center'}}>{user.displayName}</h3>
          <Image
            src={"https://pbs.twimg.com/profile_images/1356671000793010176/eDqa63oO_normal.jpg"
        }
            alt={"profile-pic"}
            height={100}
            width={100}
            className={styles.profileImage}
          />
        </div>
      ) : undefined}
    </main>
  );
}

export default withAuth(Profile);
