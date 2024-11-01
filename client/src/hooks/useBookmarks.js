import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { StoreContext } from "../context/StoreContext";
import { useContext } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const useCategories = () => {
  const { url } = useContext(StoreContext);
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const res = await fetch(`${url}/api/bookmarks/categories`, {
          headers: {
            token: localStorage.getItem('token')
          }
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data.categories;
      } catch (error) {
        toast.error('Failed to fetch categories');
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useBookmarks = (categoryId) => {
  const { url } = useContext(StoreContext);
  const queryClient = useQueryClient();

  // Prefetch related categories
  React.useEffect(() => {
    if (categoryId) {
      queryClient.prefetchQuery(['bookmarks', categoryId]);
    }
  }, [categoryId, queryClient]);

  return useQuery({
    queryKey: ['bookmarks', categoryId],
    queryFn: async () => {
      try {
        const res = await fetch(`${url}/api/bookmarks/bookmarks/${categoryId}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data.bookmarks;
      } catch (error) {
        toast.error('Failed to fetch bookmarks');
        throw error;
      }
    },
    enabled: !!categoryId,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { url } = useContext(StoreContext);

  return useMutation({
    mutationFn: async (categoryData) => {
      try {
        const res = await fetch(`${url}/api/bookmarks/category`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(categoryData)
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data.category;
      } catch (error) {
        toast.error('Failed to create category');
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success('Category created successfully');
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const { url } = useContext(StoreContext);

  return useMutation({
    mutationFn: async (categoryData) => {
      try {
        const res = await fetch(`${url}/api/bookmarks/category`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(categoryData)
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data.category;
      } catch (error) {
        toast.error('Failed to update category');
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success('Category updated successfully');
    },
  });
};

export const useCreateBookmark = () => {
  const queryClient = useQueryClient();
  const { url } = useContext(StoreContext);

  return useMutation({
    mutationFn: async (bookmarkData) => {
      try {
        const res = await fetch(`${url}/api/bookmarks/bookmark`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(bookmarkData)
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data.bookmark;
      } catch (error) {
        toast.error('Failed to create bookmark');
        throw error;
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['bookmarks', variables.categoryId]);
      toast.success('Bookmark created successfully');
    },
  });
};

export const useUpdateBookmark = () => {
  const queryClient = useQueryClient();
  const { url } = useContext(StoreContext);

  return useMutation({
    mutationFn: async (bookmarkData) => {
      try {
        const res = await fetch(`${url}/api/bookmarks/bookmark`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(bookmarkData)
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data.bookmark;
      } catch (error) {
        toast.error('Failed to update bookmark');
        throw error;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['bookmarks', data.categoryId]);
      toast.success('Bookmark updated successfully');
    },
  });
};

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();
  const { url } = useContext(StoreContext);

  return useMutation({
    mutationFn: async ({ bookmarkId, categoryId }) => {
      try {
        const res = await fetch(`${url}/api/bookmarks/bookmark`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify({ bookmarkId })
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return { bookmarkId, categoryId };
      } catch (error) {
        toast.error('Failed to delete bookmark');
        throw error;
      }
    },
    onSuccess: (variables) => {
      queryClient.invalidateQueries(['bookmarks', variables.categoryId]);
      toast.success('Bookmark deleted successfully');
    },
  });
};

// Add the missing useDeleteCategory hook
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { url } = useContext(StoreContext);

  return useMutation({
    mutationFn: async (categoryId) => {
      try {
        const res = await fetch(`${url}/api/bookmarks/category`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify({ categoryId })
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data;
      } catch (error) {
        toast.error('Failed to delete category');
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success('Category deleted successfully');
    },
  });
};

export const useUpdateBookmarkOrder = () => {
  const queryClient = useQueryClient();
  const { url } = useContext(StoreContext);

  return useMutation({
    mutationFn: async ({ categoryId, bookmarks }) => {
      try {
        const res = await fetch(`${url}/api/bookmarks/reorder`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify({ categoryId, bookmarks })
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data;
      } catch (error) {
        toast.error('Failed to update bookmark order');
        throw error;
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['bookmarks', variables.categoryId]);
    }
  });
};

export const useCategories = () => {
  const { url } = useContext(StoreContext);
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const res = await fetch(`${url}/api/bookmarks/categories-with-bookmarks`, {
          headers: {
            token: localStorage.getItem('token')
          }
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        return data.categories;
      } catch (error) {
        toast.error('Failed to fetch categories');
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  });
};