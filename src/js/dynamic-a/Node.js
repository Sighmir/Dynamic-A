
/**
 * Implementa uma celula de grafo
 * @class Node
 */
class Node {
  /**
   * Cria uma instancia de um Node.
   * @param {Number} x
   * @param {Number} y
   * @param {Number} weight
   * @param {Number} multiplier
   * @param {Array} neighbors
   * @param {Function} heuristic
   * @memberof Node
   */
  constructor(x, y, weight, multiplier, neighbors, heuristic) {
    this.x = x;
    this.y = y;
    this.weight = weight;
    this.multiplier = multiplier;
    this.neighbors = neighbors;
    this.heuristic = heuristic;
    this.neighbors.node = this;
  }

  /**
   * Adquire custo para se mover ate node, utiliza multiplier se x e y forem diferentes
   * @memberof Node
   * @param {Node} fromNeighbor Node vizinho
   * @return {Number} Custo para se mover
   */
  getCost(fromNeighbor) {
    // Leva multiplier em consideracao.
    if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
      return this.weight * this.multiplier;
    }
    return this.weight;
  }

  /**
   * Checa se um node e valido
   * @return {Boolean} Se valido ou nao (true/false)
   * @memberof Node
   */
  isWall() {
    return this.weight === 0;
  }

  /**
   * Representa o node em uma string
   * @return {String} Representacao em string
   * @memberof Node
   */
  toString() {
    return '[' + this.x + ' ' + this.y + ']';
  }
}
