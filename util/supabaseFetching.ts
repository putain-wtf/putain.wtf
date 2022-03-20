import { SupabaseClient } from "@supabase/supabase-js"

export async function getUserProfile({userId, supabaseClient}: {userId: string | undefined, supabaseClient: SupabaseClient}) {
    const { data, error } = await supabaseClient
        .from('profiles')
        .select("*")
        .eq('id', userId)

    if(error) {
        throw new Error(error.message)
    }

    if(!data) {
        throw new Error("User not found")
    }

    return data
}

export async function updateUserProfile({userId, username, biddingmode, supabaseClient}: {userId: string | undefined, supabaseClient: SupabaseClient, username: string | undefined, biddingmode: "true" | "false"}) {
    const anonymous_bidding = biddingmode === "false" ? false : true
    const { data, error } = await supabaseClient
        .from('profiles')
        .insert([
        { id: userId, username: username, anonymous_bidding: anonymous_bidding },
    ])

    if(error) {
        throw new Error(error.message)
    }

    if(!data) {
        throw new Error("User not found")
    }

    return data
}