URLify2 = function (s, num_chars) {
	s = URLify2.downcode(s);
	s = URLify2.nfd(s).replace(/[^\u0000-\u00FF]/g, ""); // convert to ascii
	s = s.replace(/[^\w\s-]/g, ''); // remove unneeded chars
	s = s.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
	s = s.replace(/[-\s]+/g, '-'); // convert spaces to hyphens
	s = s.toLowerCase(); // convert to lowercase
    if (num_chars) {
        return s.substring(0, num_chars); // trim to first num_chars chars
    }
    else {
        return s;
    }
};