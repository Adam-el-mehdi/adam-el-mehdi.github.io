# Code extrait des annexes A6-A8 du TIPE fourni par Adam El Mehdi.
# Adaptations : fichiers de sortie dans le dossier courant ; labels renomme tick_labels (Matplotlib >= 3.9).
import numpy as np
import matplotlib.pyplot as plt

m = 8.95e-3
g = 9.81
mg = m*g

v_inf_plein = np.array([
    0.4036, 0.3951, 0.3705, 0.3792, 0.3848,
    0.3856, 0.3840, 0.3899, 0.3886, 0.3843,
    0.3791, 0.3694, 0.3907, 0.3853, 0.3932,
    0.3750, 0.3684, 0.3888, 0.3834, 0.3835
])

v_inf_fendu = np.array([
    0.4946, 0.4869, 0.4973, 0.4866, 0.4929,
    0.4865, 0.4702, 0.4778, 0.4858, 0.4896,
    0.4783, 0.4789, 0.4738, 0.4729, 0.4779,
    0.4787, 0.4773, 0.4650, 0.4808, 0.4682,
    0.4659, 0.4802, 0.4865, 0.4786, 0.4971,
    0.4809, 0.4725, 0.4738, 0.4658, 0.4783
])

v_moy = np.array([v_inf_plein.mean(), v_inf_fendu.mean()])
k = mg/v_moy

print(k)
print(k[1]/k[0])

labels = ["Tube plein", "Tube fendu"]

fig, ax = plt.subplots(figsize=(5.2, 4.0))

ax.bar(labels, k, capsize=6)
ax.set_ylabel(r"$k$ (kg.s$^{-1}$)")
ax.set_title("Coefficient de freinage")
ax.grid(axis="y", alpha=0.3)
ax.set_ylim(0, 0.27)

for i, value in enumerate(k):
    ax.text(i, value + 0.010, f"{value:.3f}", ha="center")

fig.tight_layout()
fig.savefig("graphe_k_comparaison.pdf", bbox_inches="tight")
plt.close(fig)

k_plein = mg/v_inf_plein
k_fendu = mg/v_inf_fendu

fig, ax = plt.subplots(figsize=(5.4, 4.0))

ax.boxplot(
    [k_plein, k_fendu],
    tick_labels=["Tube plein", "Tube fendu"],
    showmeans=True
)

ax.scatter(np.ones_like(k_plein), k_plein, alpha=0.7)
ax.scatter(2*np.ones_like(k_fendu), k_fendu, alpha=0.7)

ax.set_ylabel(r"$k_i$ (kg.s$^{-1}$)")
ax.set_title("Distribution experimentale du coefficient de freinage")
ax.grid(axis="y", alpha=0.3)

fig.tight_layout()
fig.savefig("graphe_k_distribution.pdf", bbox_inches="tight")
plt.close(fig)
