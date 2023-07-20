import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Link from "next/link";
import Image from "next/image";

const Herosection = ({title, imageUrl})=> {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p> From thriller stories to true horror stories, we&apos;ve got you covered. Browse our
                            selection of the latest blogs, and find your new favorite today.

                        </p>
                        <Link href="/write">
                        <button>


                            Explore blogs
                        </button>
                        </Link>


                    </div>

                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="exploring blogs" width={500} height={500}/>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default Herosection;