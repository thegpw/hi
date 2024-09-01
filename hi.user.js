// ==UserScript==
// @name         Favicon and Title 2014
// @version      0.1
// @description  Change roblox icon and title
// @author       h
// @match        https://www.roblox.com*
// @match        https://web.roblox.com*
// @match        https://roblox.com*
// @match        https://www.roblox.com/*
// @match        https://web.roblox.com/*
// @match        https://roblox.com/*
// @icon         data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAA7KeYAY0vbAVxE3QWAT80Hw3q9BwAA/wCqfb4A3KWwBl1C38VdP9Zy/+2eEv//TAAAAPUAKB3wAEYy5gD/5p0AUjrgAGlQ2QA7K+cAjlbIALJsvwBwVdIIbFPZHlM73FIgHvj/Kyr5/xYS9vAjFu3RHxPtpDMm7X1IN+No/8ioLGhN2wB7XtYUSDTgTWBL4mx0WuiTQTbs2FI83544LOzEysr+/vz9/vrT1P3/wsP+/3J0/f8TDvb/PC3qvDYl7SIiEOYASjLbbTIu9f/d3P3/6+3//z48+f00Hd+5kpP8//////37+v7+////+b/B//9DOfDqYU7aWVE95QBMN+cAEAHlADwl22tGRPf9////9dHT//s1JuflVUfr6uvt//7///79////+5WW/f83KOnTPSTiKl1G3wBTPuABAAD/AQEA6QAmEuBsWFb4/v39/vmfn/z+OSLc96Ce+v3///7+/////oSE/P9CLeO5ak/XDEUv5wCygsQCQjLmAXhb0gAAAOwAEgPkanJx+f/////6VU7y/Tgq6P/p7P/+9PX+/HNw+Po+ItuSMiHhCGxcxRc4JeMs/9mwB0w54gBMOeIBAADzAC8a4YeIh/r/////+nl5+f6nqPz9///+/o6P/P8lIPH2WUnrvTMu9tM7NvTtJiP2+jUl4qYuJO0IKh/uAgAA+wAhEeqSmZn8//////n///////////////z///79+Pn//+fp///o6P7/7u///+Pk//1maPv/OSznsg4L+wAAAP4AKRvmq6Wm/P/////7bm35+VRP9vqMifv/vb7+//z8/v7///78///+/f7+/f7////6lpb8/DQh5MQCAPcAAAD/AC8h57m3t/z//////11V8tjHs90qNCDZXgwA6LuYmPz+/v7//Pn5/f79/f7+/v7++UtI9v9fPNN0US/VAAME/gAfFu60v7/9/v7+/vtZVPT4QDHiw0lB8MJNSPTqxcX8/v7+/v76+v7+///+/ePl//01K+371KWmLduvmQAAAP8LHhn1ydrb//7////45+j++9vc///s7f////////////z+/v799/f9/vv7//ykpv7/MyLkzk1U2gEDB/YB/+mUQUIz6eB+evb7qKX6/7++/P/R0f7/5+f//+7v///3+P///////////v/////7Y2H4/00w2YMKAvIAMSPvBt2ixgvjtq4oKQTEKUIe50YjE+VuPy7njk9D7K5US/DFYlv31Xd0+OSDgPn0dXX7/C8l7/25h705nnHGAIRh1QPurr4As4zBABgAzwApGeQAFAvvAAAA/wAeMf8AJJn/AAAAAAwAAMQuMQ/TfB8K4NQxD9N8/8uoGOCpuQDDkL0B/z8AAP8BAADgAQAAgAcAAIAPAACAHwAAgD8AAIADAACAAQAAgAEAAIYBAACAAwAAgAMAAIADAADwBwAA/8cAAA==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var icon = document.querySelector("link[rel~='icon']");
    icon.href = 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAA7KeYAY0vbAVxE3QWAT80Hw3q9BwAA/wCqfb4A3KWwBl1C38VdP9Zy/+2eEv//TAAAAPUAKB3wAEYy5gD/5p0AUjrgAGlQ2QA7K+cAjlbIALJsvwBwVdIIbFPZHlM73FIgHvj/Kyr5/xYS9vAjFu3RHxPtpDMm7X1IN+No/8ioLGhN2wB7XtYUSDTgTWBL4mx0WuiTQTbs2FI83544LOzEysr+/vz9/vrT1P3/wsP+/3J0/f8TDvb/PC3qvDYl7SIiEOYASjLbbTIu9f/d3P3/6+3//z48+f00Hd+5kpP8//////37+v7+////+b/B//9DOfDqYU7aWVE95QBMN+cAEAHlADwl22tGRPf9////9dHT//s1JuflVUfr6uvt//7///79////+5WW/f83KOnTPSTiKl1G3wBTPuABAAD/AQEA6QAmEuBsWFb4/v39/vmfn/z+OSLc96Ce+v3///7+/////oSE/P9CLeO5ak/XDEUv5wCygsQCQjLmAXhb0gAAAOwAEgPkanJx+f/////6VU7y/Tgq6P/p7P/+9PX+/HNw+Po+ItuSMiHhCGxcxRc4JeMs/9mwB0w54gBMOeIBAADzAC8a4YeIh/r/////+nl5+f6nqPz9///+/o6P/P8lIPH2WUnrvTMu9tM7NvTtJiP2+jUl4qYuJO0IKh/uAgAA+wAhEeqSmZn8//////n///////////////z///79+Pn//+fp///o6P7/7u///+Pk//1maPv/OSznsg4L+wAAAP4AKRvmq6Wm/P/////7bm35+VRP9vqMifv/vb7+//z8/v7///78///+/f7+/f7////6lpb8/DQh5MQCAPcAAAD/AC8h57m3t/z//////11V8tjHs90qNCDZXgwA6LuYmPz+/v7//Pn5/f79/f7+/v7++UtI9v9fPNN0US/VAAME/gAfFu60v7/9/v7+/vtZVPT4QDHiw0lB8MJNSPTqxcX8/v7+/v76+v7+///+/ePl//01K+371KWmLduvmQAAAP8LHhn1ydrb//7////45+j++9vc///s7f////////////z+/v799/f9/vv7//ykpv7/MyLkzk1U2gEDB/YB/+mUQUIz6eB+evb7qKX6/7++/P/R0f7/5+f//+7v///3+P///////////v/////7Y2H4/00w2YMKAvIAMSPvBt2ixgvjtq4oKQTEKUIe50YjE+VuPy7njk9D7K5US/DFYlv31Xd0+OSDgPn0dXX7/C8l7/25h705nnHGAIRh1QPurr4As4zBABgAzwApGeQAFAvvAAAA/wAeMf8AJJn/AAAAAAwAAMQuMQ/TfB8K4NQxD9N8/8uoGOCpuQDDkL0B/z8AAP8BAADgAQAAgAcAAIAPAACAHwAAgD8AAIADAACAAQAAgAEAAIYBAACAAwAAgAMAAIADAADwBwAA/8cAAA==';

    var title = document.querySelector("head > title").innerHTML;
    title = title.replace('Roblox', 'ROBLOX');
    document.querySelector("head > title").innerHTML = title;
})();
