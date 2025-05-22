import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import User from "@/models/User";
import connect from "@/app/utils/db";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    callbacks: {
        async signIn({ user, account }: { user: any, account: any }) {
            await connect();
            try {
                if (account?.provider === "google") {
                    const existingUser = await User.findOne({ email: user.email });
                    if (!existingUser) {
                        const newUser = new User({
                            email: user.email,
                            name: user.name,
                            provider: account.provider,
                            avatar: user.image
                        });
                        await newUser.save();
                    }
                    return true;
                }
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };