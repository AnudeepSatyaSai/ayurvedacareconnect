-- Create wellness routines table
CREATE TABLE public.wellness_routines (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  routine_type TEXT NOT NULL, -- 'morning', 'evening', 'custom'
  activities JSONB NOT NULL DEFAULT '[]'::jsonb,
  reminder_times TIME[],
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for wellness routines
ALTER TABLE public.wellness_routines ENABLE ROW LEVEL SECURITY;

-- Create policies for wellness routines
CREATE POLICY "Users can manage their own routines" 
ON public.wellness_routines 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Create wellness journal table
CREATE TABLE public.wellness_journal (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  entry_date DATE NOT NULL DEFAULT CURRENT_DATE,
  mood_rating INTEGER CHECK (mood_rating >= 1 AND mood_rating <= 10),
  energy_level INTEGER CHECK (energy_level >= 1 AND energy_level <= 10),
  sleep_quality INTEGER CHECK (sleep_quality >= 1 AND sleep_quality <= 10),
  notes TEXT,
  symptoms TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for wellness journal
ALTER TABLE public.wellness_journal ENABLE ROW LEVEL SECURITY;

-- Create policies for wellness journal
CREATE POLICY "Users can manage their own journal entries" 
ON public.wellness_journal 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_wellness_routines_updated_at
BEFORE UPDATE ON public.wellness_routines
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_wellness_journal_updated_at
BEFORE UPDATE ON public.wellness_journal
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();