
import { useToastJS } from '@/components/ui/ToastJS';

// Export the hook
export { useToastJS };

// For convenience, expose the toast function directly
export const toast = (options) => {
  try {
    const { toast } = useToastJS();
    return toast(options);
  } catch (e) {
    console.warn('Toast was called outside of ToastProvider', e);
    // Provide a fallback when used outside of context (e.g. during SSR)
    return null;
  }
};
