---
layout: post
title: How to Start with Data Science
description: Basic principles on how to start with a data science project. 
categories: [Data Science] 
image: assets/images/data-science.jpg
---

Starting with any data science project is tricky because it has so many prerequisites such as data, processing power, storage space, and not to mention the vast amount of research and studies that one needs to of to keep up with cutting edge technology that might be suitable for your project.

However, before you start investing in GPU’s and start worrying about collecting TB’s of data, take a second to think about what is the ideal type of data you would need for your product to be successful?

I recently built a chatbot for a company website that can answer any questions about the company. Ideally I would have liked to have a dataset of questions that people have already asked about the company and the company website, but I do not have that. So I needed to start from scratch and create my own questions and their answers. It wasn’t pretty when I started, but things got better and better as I persevered, and got real people to ask real questions to the chatbot. Eventually, the bot improves as we bootstrapped our data with more and more question and answer pairs.

Ideally we would want to have data that we can simply throw at our algorithms and then wait for magic to happen and for everything to instantaneously start working without any hiccups. Such situations do happen sometimes, but when they do, they have a backing of highly meticulous data preparation and planning, along with a goo grasp of technologies that would produce the ideal output.

One strong resistance that I have observed in a lot of data scientists is the reluctance to create data. People love to web-scrape and collect millions and millions of web pages automatically, but there is a strong reluctance to build anything by hand or manually. I am all for building a large datasets and experimenting with it, but doing that as a first step, without any insight into the quality of the data, leaves us with a huge disadvantage:

- We do not start with a tiny corpus of very clean data. So we don’t know the best case scenario of how well out model could perform if we have clean data.
- We cannot measure how people react to the nuances of the data. e.g. sentiment analysis - some people might think a comment is neutral, while others think it is positive (example?). We can know what type of data we need, and get human agreements and computation if we start our work with working with a tiny dataset that is humanly digestible.
- Starting with a small but perfect dataset lets us know what to aspire for and will make the process of bootstrapping and acquiring more at a even better. If we start data collection without having the ideal goal data at hand, we will be on the constant course correction of trying to clean up our data, instead of having filters in place to collect the good data only and throw away the and or junk data as we find it.
