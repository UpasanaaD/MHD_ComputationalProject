---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Task 2
As a part of this task, we are to solve the mean-field $\alpha-\omega$ dynamo equations in the kinematic regime. 

- With these assumptions, the $r$ and $\phi$-components of the mean-field Induction equation in cylindrical coordinates are-

$$
\begin{array}{l}
\frac{\partial \bar{B}_r}{\partial r}=-\frac{\partial}{\partial z}\left(\alpha \bar{B}_\phi\right)+\eta_t\left\{\frac{\partial}{\partial r}\left[\frac{1}{r} \frac{\partial}{\partial r}\left(r \bar{B}_r\right)\right]+\frac{\partial^2 \bar{B}_r}{\partial z^2}\right\}, \\
\frac{\partial \bar{B}d}{\partial r}=-q\Omega \bar{B}_r+\eta_t\left\{\frac{\partial}{\partial r}\left{\frac{1}{r} \frac{\partial}{\partial r}\left(r \bar{B}_\phi\right)\right}+\frac{\partial^2 \bar{B}_\phi}{\partial z^2}\right\},
\end{array}
$$

where $q \equiv-\partial \ln \Omega / \partial \ln r$.

These equations do not depend on $\bar{B}_z$. To get $\bar{B}_t$, solve

$$
\nabla \cdot \bar{B}=\frac{1}{r} \frac{\partial}{\partial r}\left(r \bar{B}_r\right)+\frac{\partial \bar{B}_2}{\partial z}=0
$$
