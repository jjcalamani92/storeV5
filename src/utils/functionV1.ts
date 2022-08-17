import { Site } from '../interfaces/siteV1';
import { ParsedUrlQuery } from 'querystring';
export const childrens0 = (site: Site) => {
  return site?.children;
};
export const childrens1 = (site:Site) => {
  return childrens0(site).map(data0 => data0.children).filter(data => data !== null).flat(1);
} 
export const childrens2 = (site:Site) => {
  return childrens1(site).map(data1 => data1.children).filter(data => data !== null).flat(2);
} 
export const childrens3 = (site:Site) => {
  return childrens2(site).map(data2 => data2.children).filter(data => data !== null).flat(3);
} 
export const childrens4 = (site:Site) => {
  return childrens3(site).map(data3 => data3.children).filter(data => data !== null).flat(4);
} 
export const childrens5 = (site:Site) => {
  return childrens4(site).map(data4 => data4.children).filter(data => data !== null).flat(5);
} 

//TODO: CHILDREN TODO:
export const children0 = (site: Site, query: ParsedUrlQuery) => {
  return childrens0(site)?.find(data => query.slug ? data?.head.href === query.slug![0] : data?.head.href === '');
};
export const children1 = (site: Site, query: ParsedUrlQuery) => {
  return childrens1(site)?.find(data => data?.head.href === query.slug![1]);
};
export const children2 = (site: Site, query: ParsedUrlQuery) => {
  return childrens2(site)?.find(data => data?.head.href === query.slug![2]);
};
export const children3 = (site: Site, query: ParsedUrlQuery) => {
  return childrens3(site)?.find(data => data?.head.href === query.slug![3]);
};
export const children4 = (site: Site, query: ParsedUrlQuery) => {
  return childrens4(site)?.find(data => data?.head.href === query.slug![4]);
};
export const children5 = (site: Site, query: ParsedUrlQuery) => {
  return childrens5(site)?.find(data => data?.head.href === query.slug![5]);
};

export const seo = (site: Site, query: ParsedUrlQuery) => {
  if (query.slug && query.slug![5]) {
    return children5(site, query)?.head!
  } else if (query.slug && query.slug![4]) {
    return children4(site, query)?.head!
  } else if (query.slug && query.slug![3]) {
    return children3(site, query)?.head!
  } else if (query.slug && query.slug![2]) {
    return children2(site, query)?.head!
  } else if (query.slug && query.slug![1]) {
    return children1(site, query)?.head!
  } else {
    return children0(site, query)?.head!
  }
}

//TODO: PATHS TODO:
export const childrenPaths0 = (site: Site) => {
  return childrens0(site)!.map(data0 => `/${data0.head.href}`)
}
export const childrenPaths1 = (site: Site) => {
  return childrens0(site)!.map(data0 => data0.children?.map(data1 => `/${data0.head.href}/${data1.head.href}`)).flat(1).filter(data => typeof data !== 'undefined')
}
export const childrenPaths2 = (site: Site) => {
  return childrens0(site)!.map(data0 => data0.children?.map(data1 => data1.children?.map(data2 => `/${data0.head.href}/${data1.head.href}/${data2.head.href}`))).flat(2).filter(data => typeof data !== 'undefined')
}