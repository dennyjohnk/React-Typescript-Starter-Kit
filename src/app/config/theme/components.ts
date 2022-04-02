export const components = {
  Input: {
    defaultProps: {
      size: 'lg',
      variant: 'outline',
    },
    variants: {
      outline: () => ({
        field: {
          _placeholder: {
            color: 'gray.300',
            fontSize: 'sm',
            fontWeight: 'normal',
          },
        },
      }),
    },
    sizes: {
      xl: {
        field: {
          borderRadius: 'md',
          fontSize: 'lg',
          h: 16,
          px: 4,
        },
        addon: {
          borderRadius: 'md',
          fontSize: 'lg',
          h: 16,
          px: 4,
        },
      },
    },
  },
  Select: {
    defaultProps: {
      size: 'lg',
      variant: 'outline',
    },
    sizes: {
      xl: {
        field: {
          borderRadius: 'md',
          fontSize: 'lg',
          h: 16,
          px: 4,
        },
        addon: {
          borderRadius: 'md',
          fontSize: 'lg',
          h: 16,
          px: 4,
        },
      },
    },
  },
  NumberInput: {
    defaultProps: {
      size: 'lg',
      variant: 'outline',
    },
  },
};
