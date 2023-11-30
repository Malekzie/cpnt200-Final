
import { createClient } from '@supabase/supabase-js'
import { SUPA_URL, SUPA_KEY } from '$env/static/private'
export const supabase = createClient(SUPA_URL, SUPA_KEY);