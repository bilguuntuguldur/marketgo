
import axios from 'axios';
import { isAxiosError } from '@/lib/utils'; 

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error('WORDPRESS_API_URL is not defined or incorrect.');
}

export const fetchWordPressMenus = async () => {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}menus/v1/menus`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error fetching WordPress menus: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching WordPress menus');
    }
  }
};

export const fetchWordPressMenuItems = async (menuId: number) => {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}menus/v1/menus/${menuId}`);
    return response.data.items; // Ensure this matches the response structure
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error fetching WordPress menu items: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching WordPress menu items');
    }
  }
};

export const fetchWordPressPages = async () => {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}wp/v2/pages`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error fetching WordPress pages: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching WordPress pages');
    }
  }
};

export const fetchWordPressPage = async (slug: string) => {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}wp/v2/pages?slug=${slug}`);
    return response.data[0]; // Assuming slugs are unique, so only one page is returned
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Error fetching WordPress page: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching WordPress page');
    }
  }
};
