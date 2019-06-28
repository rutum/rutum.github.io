---
layout: post
title: How much data does Machine Learning need?
categories: [Machine Learning]
filter: [Artificial Intelligence]
image: assets/images/ml-data.jpg
comments: true
author: rutum
---

100 data points - that is all you need to start with your first model. 

"but that is not enough" - you say!

To which I say - "you have to start somewhere. Just start with 100 data points that represent your data"

Train a model with that small dataset - it will train in more seconds (unlike Terabytes of data which could potentially need days to train). 

And.. voila .. you now have a baseline model to use to evaluate and test against your data. 

Use this model to answer the following questions: 

1. Which cases can your model efficiently capture?
2. Which cases does your model miss out on?
3. What is the percentage of accuracy of your model?
    - <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision</a>
    - <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Recall</a>
    - <a href="https://en.wikipedia.org/wiki/F1_score">F1 Score</a>

Eventually you will have to add more data to your training data, but now you know what type of data you need! 

Let me explain. 

If your model produces the correct answer for category A, but incorrect answers for category B, you need to add more examples of category B data so that the model can capture category B as well as category A. 

So now.. step 2 - you add more examples - increasing your training dataset from 100 data points to 1000 data points - woohoo. 

What next? Train and test again. WHen you test go back and answer the same questions: 

1. Which cases can your model efficiently capture?
2. Which cases does your model miss out on?
3. What is the percentage of accuracy of your model?
    - <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision</a>
    - <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Recall</a>
    - <a href="https://en.wikipedia.org/wiki/F1_score">F1 Score</a>

Keep observing how your precision, recall and F1 score keep changing on the **SAME** dataset.

The testing dataset should **NOT** be used for training. That way you can measure the scores on the same set over time to evaluate your model. 

Good Luck and happy coding!


