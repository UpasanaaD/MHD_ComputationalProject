# Overview of project
I am Upasana, a 4th year student affiliated to the School of Physical Sciences, National Institute of Science Education and Research, Bhubaneswar India. This computational project is as part of coursework for Plasma Physics and Magnetohydrodynamics taken by Dr Luke Chamandy at the same institute. 

We are expected to solve numerically the mean-field galactic dynamo equations derived using the first order smoothing approximation, $E = \alpha B − \eta_T \nabla \times B$, in the kinematic regime. The project has been divided into three tasks:

## Task 1:

Solving the diffusion equation. That is, the equations omitting the ∇ × (V × B) and α terms, so that the only terms remaining on the RHS are those involving ηt (or ηT = ηt + η, to be precise).

- This task is common to all students, but half of the class is solving the diffusion equation in z and the other half in r (under the no-z approximation). I have been assigned the latter.
- To explore the evolution of the magnetic field magnitude and of the exponential decay rate.
- Explore the evolution of the spatial solution for Br and Bφ, and of the pitch angle of the mean
magnetic field p.
- Explore how different boundary conditions affect the results.
- Explore how different seed fields affect the results.

Right now, this website pertains to only Task 1.

## Task 2:

Solving the mean-field $\alpha-\Omega$ dynamo equations in the kinematic regime. That is, include the $\Omega$ effect term in the equation for $\partial B_\phi/\partial t$ and the $\alpha $ effect term in the equation for $\partial B_r/\partial t$. This requires specifying the overall magnitude and spatial dependence of $\Omega$ and $\alpha$.

- Repeat the investigations done for task 1, with the new equations, for different values of the dynamo number,

$$
 D = \frac{\alpha_0 q \Omega h^3}{\eta_t^2}
$$


where $q = −d ln \Omega/d ln r$ and $\alpha_0$ > 0 is the amplitude of the $\alpha$ effect. Note that q > 0 if $\Omega$ decreases with r, which is generally the case in galaxies, so D < 0.
- The exponential decay becomes exponential growth if |D| > |$D_c$|, where $D_c$ is the critical dynamo number. Find the critical dynamo number numerically (ideally, you would automate this feature).
- Compare the growth rate you obtain for a given value of D (for |D| > |Dc|) with the no-z solution prediction for the local growth rate γ. Do the same comparison for Dc. Do the results agree with your expectations?

## Task 3:
Will be updated

```{tableofcontents}
```
