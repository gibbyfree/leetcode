function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let s_map: Map<string, number> = new Map<string, number>();
  let t_map: Map<string, number> = new Map<string, number>();
  let pair_map: Map<string, string> = new Map<string, string>();

  for (let i: number = 0; i < s.length; i++) {
    if (!s_map.has(s.charAt(i))) {
      s_map.set(s.charAt(i), 0);
    } else {
      const val: number = s_map.get(s.charAt(i));
      s_map.set(s.charAt(i), val + 1);
    }

    if (!t_map.has(t.charAt(i))) {
      t_map.set(t.charAt(i), 0);
    } else {
      const val: number = t_map.get(t.charAt(i));
      t_map.set(t.charAt(i), val + 1);
    }

    if (s_map.get(s.charAt(i)) !== t_map.get(t.charAt(i))) {
      return false;
    }

    if (pair_map.has(s.charAt(i))) {
      if (pair_map.get(s.charAt(i)) !== t.charAt(i)) {
        return false;
      }
    } else {
      pair_map.set(s.charAt(i), t.charAt(i));
    }
  }
  return true;
}
