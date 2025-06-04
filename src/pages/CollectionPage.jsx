import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/clerk-react';
import HomeBtn from '../components/HomeBtn';

function CollectionPage() {
    return (
        <>
            <SignedIn>
                <h1>My Collection</h1>
                <UserButton />
                {/* Your collection component */}
            </SignedIn>

            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
            <HomeBtn />
        </>
    );
}
export default CollectionPage;
